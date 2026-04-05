import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { decryptFile } from "./decrypt";
import { withBase } from "../../../utils/basePath";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(withBase("draco/"));
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          withBase("models/character.enc"),
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            try {
              character = gltf.scene;
              character.traverse((child: any) => {
                if (child.isMesh) {
                  const mesh = child as THREE.Mesh;
                  child.castShadow = true;
                  child.receiveShadow = true;
                  mesh.frustumCulled = true;
                }
              });

              const footR = character.getObjectByName("footR");
              const footL = character.getObjectByName("footL");
              if (footR) {
                footR.position.y = 3.36;
              }
              if (footL) {
                footL.position.y = 3.36;
              }

              resolve(gltf);

              // Shader precompilation is helpful, but it should never block the app from loading.
              void renderer.compileAsync(character, camera, scene).catch((error) => {
                console.warn("Character shader precompile failed:", error);
              });
            } catch (error) {
              reject(error);
            } finally {
              URL.revokeObjectURL(blobUrl);
              dracoLoader.dispose();
            }
          },
          undefined,
          (error) => {
            URL.revokeObjectURL(blobUrl);
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
