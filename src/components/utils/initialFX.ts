import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

const createSplitText = (
  target: string | string[],
  vars: ConstructorParameters<typeof SplitText>[1]
) => {
  const targets = Array.isArray(target)
    ? target.filter((selector) => document.querySelector(selector))
    : document.querySelector(target)
      ? target
      : null;

  if (!targets || (Array.isArray(targets) && targets.length === 0)) {
    return null;
  }

  return new SplitText(targets, vars);
};

const animateChars = (
  splitText: SplitText | null,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
) => {
  if (!splitText || splitText.chars.length === 0) {
    return;
  }

  gsap.fromTo(splitText.chars, fromVars, toVars);
};

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = createSplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  animateChars(
    landingText,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  if (document.querySelector(".landing-info-h2")) {
    gsap.fromTo(
      ".landing-info-h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        y: 0,
        delay: 0.8,
      }
    );
  }

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

}
