import { PanKalyanik } from "@/const/panKalyanik";
import { getTelLink } from "@/utils/getCleanedTel";

export default function Footer() {
  return (
    <div className="flex justify-center items-center font-thin flex-col py-5 border-t-1 border-t-border">
      <div className="flex min-w-7/12 lg:w-9/12 justify-between mt-5 text-sm">
        <div className="flex flex-col">
          <div>{PanKalyanik.contacts.adress}</div>
          <div>{PanKalyanik.contacts.workingHours[0]}</div>
          <div>{PanKalyanik.contacts.workingHours[1]}</div>
        </div>
        <div className="flex items-end md:items-start">
          <a
            className="no-underline hover:underline"
            href={getTelLink(PanKalyanik.contacts.tel)}>
            {PanKalyanik.contacts.tel}
          </a>
        </div>
      </div>
    </div>
  );
}
