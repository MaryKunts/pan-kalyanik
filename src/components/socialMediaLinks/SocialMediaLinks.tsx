import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaLinks() {
  return (
    <div className=" justify-start gap-4 flex">
      <button className="">
        <a
          href="https://www.instagram.com/pan_kalyanik_bar/"
          className="block ">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
        </a>
      </button>
      <button>
        <a href="https://web.telegram.org/a/#1027116316" className="block  ">
          <FontAwesomeIcon icon={faTelegram} size="2xl" />
        </a>
      </button>
    </div>
  );
}
