import {
  faInstagram,
  faTelegram,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaLinks() {
  return (
    <div className="justify-start gap-4 flex">
      <a
        href="https://vk.link/pan_kalyanik"
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faVk} size="2xl" />
      </a>
      <a
        href="https://www.instagram.com/pan_kalyanik_bar/"
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
      </a>
      <a
        href="https://web.telegram.org/a/#1027116316"
        className="block rounded-full transition-colors duration-300 hover:text-accent">
        <FontAwesomeIcon icon={faTelegram} size="2xl" />
      </a>
    </div>
  );
}
