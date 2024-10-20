export default function getImage(name: string) {
  return `/img/${name.toLowerCase().replaceAll(" ", "-")}.png`;
}