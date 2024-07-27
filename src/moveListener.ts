import { getStyleNumber, UnitConversion } from "./utils";

export const moveListenerConfig: { priorityTarget: HTMLElement | null } = {
  priorityTarget: null,
};
export const moveListener = (dom: HTMLElement) => {
  dom.addEventListener("mousedown", (e: any) => {
    console.log("mousedown");
    let target: HTMLElement | null =
      moveListenerConfig.priorityTarget || e.target;
    moveListenerConfig.priorityTarget = null;
    while (target && target !== dom && !target.className.includes("can_move")) {
      target = target.parentElement;
    }
    if (!target || target === dom) return;

    const x =
      e.clientX - UnitConversion.mm2px(getStyleNumber(target.style.left));
    const y =
      e.clientY - UnitConversion.mm2px(getStyleNumber(target.style.top));
    console.log("move", target);
    const move = (e: any) => {
      const { clientX, clientY } = e;
      target.style.left = UnitConversion.px2mm(clientX - x) + "mm";
      target.style.top = UnitConversion.px2mm(clientY - y) + "mm";
    };
    const end = (e: any) => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
  });
};
