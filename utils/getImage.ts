export default function getImage(productName: string) {
  return `/img/${productName.toLowerCase().replaceAll(" ", "-")}.png`;
}