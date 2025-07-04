import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { ROUTES } from "@/const/routes";

export default function GoBackButton() {
  return (
    <Link
      href={ROUTES.ROOT}
      className="w-20 h-full absolute top-5 left-7 md:top-9 md:left-15 ">
      <Button
        variant={"outline"}
        className="cursor-pointer flex items-center justify-between">
        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
        <div>Назад</div>
      </Button>
    </Link>
  );
}
