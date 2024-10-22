import formatName from "./formatName";

export default function getImage(name: string) {
  return `/img/${formatName(name)}.png`;
}