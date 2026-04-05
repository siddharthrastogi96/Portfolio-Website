import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { withBase } from "../../utils/basePath";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CharacterModel = () => {
  const { setLoading } = useLoading();
  const logoSrc = withBase("images/logo.png");
  const characterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const image = new window.Image();

    const finishLoading = () => {
      if (!cancelled) {
        setLoading(100);
      }
    };

    image.addEventListener("load", finishLoading);
    image.addEventListener("error", finishLoading);
    image.src = logoSrc;

    if (image.complete) {
      finishLoading();
    }

    return () => {
      cancelled = true;
      image.removeEventListener("load", finishLoading);
      image.removeEventListener("error", finishLoading);
    };
  }, [logoSrc, setLoading]);

  useEffect(() => {
    const character = characterRef.current;
    if (!character) {
      return;
    }

    let tween: gsap.core.Tween | null = null;

    const syncHeroVisibility = () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();

      gsap.set(character, {
        autoAlpha: 1,
        yPercent: 0,
      });

      tween = gsap.to(character, {
        autoAlpha: 0,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".landing-section",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    };

    syncHeroVisibility();
    window.addEventListener("resize", syncHeroVisibility);

    return () => {
      window.removeEventListener("resize", syncHeroVisibility);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <div className="character-container">
      <div
        className="character-model character-model-static"
        aria-hidden="true"
        ref={characterRef}
      >
        <div className="character-static-glow"></div>
        <div className="character-static-frame">
          <img
            src={logoSrc}
            alt="Siddharth Rastogi logo"
            className="character-static-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterModel;
