import formatName from "./formatName";

export default function getSVG(name: string) {
  return `/svg/${formatName(name)}.svg`;
}
