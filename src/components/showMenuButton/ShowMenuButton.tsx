import Link from "next/link";
import { Button } from "../ui/button";
import { ROUTES } from "@/const/routes";

export default function ShowMenuButton() {
  return (
    <Button size={"lg"} className="text-lg" asChild>
      <Link href={ROUTES.MENU_PAGE}>Посмотреть меню</Link>
    </Button>
  );
}
