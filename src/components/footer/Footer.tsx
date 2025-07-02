import { PanKalyanikContacts } from "@/const/contacts";

export default function Footer() {
  return (
    <div className="flex justify-center items-center font-thin flex-col py-5 border-t-1 border-t-border">
      <div className="flex min-w-7/12 lg:w-9/12 xl:justify-center xl:gap-20 justify-between mt-5 text-sm">
        <div className="flex flex-col">
          <div>{PanKalyanikContacts.adress}</div>
          <div>{PanKalyanikContacts.workingHours[0]}</div>
          <div>{PanKalyanikContacts.workingHours[1]}</div>
        </div>
        <div className="flex items-end md:items-start">
          <a
            className="no-underline hover:underline"
            href={`tel:${PanKalyanikContacts.telHref}`}>
            {PanKalyanikContacts.tel}
          </a>
        </div>
      </div>
    </div>
  );
}
