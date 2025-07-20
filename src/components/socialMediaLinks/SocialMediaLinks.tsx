import {
  faInstagram,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA_LINKS } from "./const";
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="justify-start gap-4 flex">
      <Link
        rel="canonical"
        href={SOCIAL_MEDIA_LINKS.VK}
        target="_blank"
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faVk} size="2xl" />
      </Link>
      <Link
        rel="canonical"
        href={SOCIAL_MEDIA_LINKS.INSTAGRAM}
        target="_blank"
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </Link>
      <Link
        rel="canonical"
        href={SOCIAL_MEDIA_LINKS.TELEGRAM}
        target="_blank"
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faTelegram} size="2xl" />
      </Link>
    </div>
  );
}
