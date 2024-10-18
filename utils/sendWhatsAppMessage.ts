export default function sendWhatsAppMessage(productName: string) {
  const message = `Good day Madam Peace, my name is ___YOUR NAME___ and I want to buy ${productName}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2348033976261?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}