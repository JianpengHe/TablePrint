export class UnitConversion {
  static px2mm(px: number) {
    return px / UnitConversion.coefficient;
  }
  static mm2px(mm: number) {
    return mm * UnitConversion.coefficient;
  }
  /** 1mm为多少px */
  static coefficient = 1;
}

export const getStyleNumber = (styleAtt: string | undefined) =>
  parseFloat(styleAtt || "0") || 0;
