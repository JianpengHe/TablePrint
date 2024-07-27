const styled = {
  a: (raw, ...args) => raw.reduce((str, r, i) => str + args[i - 1] + r),
};
export const style = {
  parent: styled.a`
    @media print {
      :has(.body) :not(.body, .body *, :has(.body)) {
        display: none !important;
      }
      .body {
        left: 0 !important;
        top: 0 !important;
      }
    }
    .body {
      box-shadow:
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
      position: absolute;
    }
  `,
  dom: styled.a`
    position: relative;
    overflow: hidden;
    background-image: repeating-linear-gradient(
        rgb(238, 238, 238) 0px,
        rgb(238, 238, 238) 8px,
        transparent 0px,
        transparent 16px
      ),
      repeating-linear-gradient(
        90deg,
        rgb(238, 238, 238) 0px,
        rgb(238, 238, 238) 8px,
        transparent 0px,
        transparent 16px
      );
    background-blend-mode: screen;
    width: 100%;
    height: 100%;
  `,
  main: styled.a`
    position: relative;
  `,
  body: styled.a`
    top: 10mm;
    left: 110mm;
    background-color: #fff;
  `,

  menu: styled.a`
    z-index: 99;
    width: 100mm;
    background-color: rgb(238, 238, 238);
    box-shadow:
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);
  `,
  menuButton: styled.a`
    user-select: none;
  `,
};
