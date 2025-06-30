import {
  faInstagram,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_MEDIA_LINKS } from "./const";

export default function SocialMediaLinks() {
  return (
    <div className="justify-start gap-4 flex">
      <a
        href={SOCIAL_MEDIA_LINKS.VK}
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faVk} size="2xl" />
      </a>
      <a
        href={SOCIAL_MEDIA_LINKS.INSTAGRAM}
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </a>
      <a
        href={SOCIAL_MEDIA_LINKS.TELEGRAM}
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faTelegram} size="2xl" />
      </a>
    </div>
  );
}
