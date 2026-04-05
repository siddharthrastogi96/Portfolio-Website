import { useEffect, useRef } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";
import { setAllTimeline, setCharTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const characterRef = useRef<THREE.Object3D | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (canvasDiv.current) {
      let disposed = false;
      let animationFrameId = 0;
      let introTimer: number | undefined;
      let hoverCleanup: (() => void) | undefined;

      const getContainerSize = () => {
        const rect = canvasDiv.current?.getBoundingClientRect();
        return {
          width: Math.max(rect?.width ?? window.innerWidth, 1),
          height: Math.max(rect?.height ?? window.innerHeight, 1),
        };
      };

      const container = getContainerSize();
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      const resizeScene = (loadedCharacter?: THREE.Object3D | null) => {
        if (!canvasDiv.current) return;
        const { width, height } = getContainerSize();
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        if (loadedCharacter ?? characterRef.current) {
          handleResize(renderer, camera, canvasDiv);
        }
      };

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      loadCharacter().then((gltf) => {
        if (!gltf || disposed) {
          return;
        }
        const animations = setAnimations(gltf);
        hoverCleanup =
          hoverDivRef.current ? animations.hover(gltf, hoverDivRef.current) : undefined;
        mixer = animations.mixer;
        const character = gltf.scene;
        characterRef.current = character;
        scene.add(character);
        setCharTimeline(character, camera);
        setAllTimeline();
        headBone = character.getObjectByName("spine006") || null;
        screenLight = character.getObjectByName("screenlight") || null;
        resizeScene(character);
        progress.loaded().then(() => {
          if (disposed) {
            return;
          }
          introTimer = window.setTimeout(() => {
            if (disposed) {
              return;
            }
            light.turnOnLights();
            animations.startIntro();
            resizeScene(character);
          }, 2500);
        });
      }).catch((error) => {
        if (!disposed) {
          console.error("Error initializing character scene:", error);
          progress.clear();
        }
      });

      const handleWindowResize = () => resizeScene();
      window.addEventListener("resize", handleWindowResize);

      resizeObserverRef.current = new ResizeObserver(() => {
        resizeScene();
      });
      resizeObserverRef.current.observe(canvasDiv.current);

      // Production CSS/layout can settle a frame later than mount.
      const initialFrame = window.requestAnimationFrame(() => resizeScene());
      const secondFrame = window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => resizeScene())
      );

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      const mouseMoveHandler = (event: MouseEvent) => {
        onMouseMove(event);
      };
      document.addEventListener("mousemove", mouseMoveHandler);
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (disposed) {
          return;
        }
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();
      return () => {
        disposed = true;
        window.cancelAnimationFrame(initialFrame);
        window.cancelAnimationFrame(secondFrame);
        window.cancelAnimationFrame(animationFrameId);
        if (introTimer) {
          window.clearTimeout(introTimer);
        }
        progress.stop();
        clearTimeout(debounce);
        hoverCleanup?.();
        characterRef.current = null;
        resizeObserverRef.current?.disconnect();
        resizeObserverRef.current = null;
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", handleWindowResize);
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        document.removeEventListener("mousemove", mouseMoveHandler);
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
