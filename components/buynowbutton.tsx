"use client";
import sendWhatsAppMessage from "@/utils/sendWhatsAppMessage";

export default function BuyNowButton({
  className,
  productName,
}: {
  className: string;
  productName: string;
}) {
  return (
    <button
      className={className}
      onClick={() => sendWhatsAppMessage(productName)}>
      Buy Now
    </button>
  );
}
