export default function useColorPalette(color, opacity) {
  const palette = {
    1: "#022a9b",
    2: "#fc5975",
    3: "#7e93c6",
  };

  const alpha = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  return `${palette[color]}${alpha}`;
}
