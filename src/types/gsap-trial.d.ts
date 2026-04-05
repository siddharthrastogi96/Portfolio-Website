declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      targets:
        | string
        | Element
        | Array<string | Element>
        | Element[]
        | NodeListOf<Element>
        | HTMLCollectionOf<Element>,
      vars?: Record<string, unknown>
    );

    chars: Element[];
    words: Element[];
    lines: Element[];

    revert(): void;
  }

  export default SplitText;
}
