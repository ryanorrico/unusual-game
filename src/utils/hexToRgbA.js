function hexToRgbA(hex, opacity) {
  // console.log('hex :>> ', hex);
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");

    let rgba = {
      r: (c >> 16) & 255,
      b: (c >> 8) & 255,
      g: c & 255,
      a: 1,
      string:
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        "," +
        opacity +
        ")",
    };
    return rgba;
  }
  throw new Error("Bad Hex");
}
export default hexToRgbA;
