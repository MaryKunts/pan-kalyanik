import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle: string;
  additionalInfo: string[];
  personAmount?: string;
  time?: string;
}

export default function RentCard({
  title,
  subtitle,
  additionalInfo,
  personAmount,
  time,
}: Props) {
  return (
    <div className="rounded-lg border hover:border-primary hover:scale-110 transition-all duration-300 shadow-sm bg-card-gradient border-border px-6 py-8 flex flex-col items-center justify-between">
      <h3 className="font-semibold tracking-tight text-card-foreground  font-heading text-2xl mb-2">
        {title}
      </h3>
      <div className="text-4xl font-heading font-bold text-gradient">
        {subtitle}
      </div>
      {personAmount && time && (
        <div className="flex items-center justify-center gap-5 text-sm text-muted-foreground pt-2">
          <div className="flex gap-2 items-center justify-between">
            <FontAwesomeIcon icon={faClock} size="xs" />
            {time}
          </div>
          <div className="flex gap-2 items-center justify-between">
            <FontAwesomeIcon icon={faUsers} size="xs" />
            {personAmount}
          </div>
        </div>
      )}
      <ul className="flex flex-col items-start gap-3 pt-5 text-left">
        {additionalInfo.map((info) => {
          return (
            <li key={info} className="flex justify-center items-center gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-accent" />
              {info}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
