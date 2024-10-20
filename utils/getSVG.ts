export default function getSVG(name: string) {
  return `/svg/${name.toLowerCase().replaceAll(" ", "-")}.svg`;
}
