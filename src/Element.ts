import { moveListenerConfig } from "./moveListener";
import { getStyleNumber, UnitConversion } from "./utils";

export class ElementConfig<T extends keyof HTMLElementTagNameMap> {
  public label: string;
  public tag: T;
  public style?: Partial<HTMLElementTagNameMap[T]["style"]>;

  constructor(
    label: string,
    tag: T,
    style?: Partial<HTMLElementTagNameMap[T]["style"]>
  ) {
    this.label = label;
    this.tag = tag;
    this.style = style;
  }

  public add(style?: Partial<HTMLElementTagNameMap[T]["style"]>) {
    const dom = document.createElement(this.tag);
    const newStyle = { ...this.style, ...style };
    for (const k in newStyle) {
      if (newStyle[k] !== undefined) dom.style[k] = newStyle[k];
    }
    ElementConfig.parentDom.appendChild(dom);
    console.log(ElementConfig.parentDom, dom, style);
    return dom;
  }
  public create({ clientX, clientY }: { clientX: number; clientY: number }) {
    let left = -getStyleNumber(this.style?.width) / 2;
    let top = -getStyleNumber(this.style?.height) / 2;

    left -=
      getStyleNumber(ElementConfig.parentDom.style.left) -
      UnitConversion.px2mm(clientX);
    top -=
      getStyleNumber(ElementConfig.parentDom.style.top) -
      UnitConversion.px2mm(clientY);

    console.log("创建", this.label, clientX, clientY);
    // @ts-ignore
    const dom = this.add({
      left: left + "mm",
      top: top + "mm",
      zIndex: 999,
      textAlign: "center",
      backgroundColor: "#fff",
      userSelect: "none",
    });
    dom.innerHTML = "xin";
    dom.className = "can_move";
    moveListenerConfig.priorityTarget = dom;
    const mouseup = () => {
      window.removeEventListener("mouseup", mouseup);
      dom.style.zIndex = "";
    };
    window.addEventListener("mouseup", mouseup);
    return dom;
  }
  static parentDom = document.body;
}
export const elements = [
  new ElementConfig("文本框", "div", {
    position: "absolute",
    width: "50mm",
    height: "8mm",
    lineHeight: "8mm",
    fontSize: "6mm",
  }),
];

// export class Element {
//   constructor() {}
//   newElement<T extends keyof HTMLElementTagNameMap>(
//     elementConfig: ElementConfig<T>,
//     x: number,
//     y: number
//   ) {}
// }
