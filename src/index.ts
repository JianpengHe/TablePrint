import { ElementConfig } from "./Element";
import { Menu } from "./Menu";
import { moveListener } from "./moveListener";
import { style } from "./style";
import { UnitConversion } from "./utils";

export class TablePrint {
  public readonly shadow: ShadowRoot;
  public readonly width: number;
  public readonly height: number;
  public readonly dom: HTMLDivElement;

  private readonly menu: HTMLDivElement;
  private readonly main: HTMLDivElement;
  private readonly config: HTMLDivElement;
  constructor(dom = document.body, width = 210, height = 297) {
    this.shadow = dom.attachShadow({
      mode: "open",
    });
    this.shadow.appendChild((this.dom = document.createElement("div")));

    this.width = width;
    this.height = height;
    const styleDom = document.createElement("style");
    styleDom.innerHTML = style.parent;
    this.dom.appendChild(styleDom);
    this.dom.appendChild((this.main = document.createElement("div")));
    this.dom.appendChild((this.menu = new Menu().menu));
    this.dom.appendChild((this.config = document.createElement("div")));

    this.dom.style.cssText = style.dom;
    this.main.style.cssText = style.main;

    const body = document.createElement("div");
    this.main.appendChild(body);
    body.className = "body can_move";
    body.style.cssText = style.body;
    body.style.width = this.width + "mm";
    body.style.height = this.height + "mm";
    UnitConversion.coefficient =
      body.getBoundingClientRect().width / this.width;
    moveListener(this.dom);
    ElementConfig.parentDom = body;
  }
}
