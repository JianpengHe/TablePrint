import { elements } from "./Element";
import { style } from "./style";

export class Menu {
  public readonly menu: HTMLDivElement;
  private readonly newElementDOM: HTMLDivElement;

  constructor() {
    this.menu = document.createElement("div");
    this.menu.style.cssText = style.menu;

    this.menu.appendChild((this.newElementDOM = document.createElement("div")));
    for (const element of elements) {
      const button = document.createElement("div");
      button.addEventListener("mousedown", element.create.bind(element), false);
      button.innerHTML = element.label;
      button.style.cssText = style.menuButton;
      this.newElementDOM.appendChild(button);
    }
  }
}
