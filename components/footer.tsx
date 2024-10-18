import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <p>
        {new Date().getFullYear()} &copy; Built by{" "}
        <Link
          target="_blank"
          className="text-laurel-600"
          href="https://github.com/Emmanuel-Anaba">
          Emmanuel Anaba
          <RiExternalLinkFill />
        </Link>
      </p>
    </footer>
  );
}
