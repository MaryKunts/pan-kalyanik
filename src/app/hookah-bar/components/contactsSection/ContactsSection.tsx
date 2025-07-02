import { Map, Pin, AdvancedMarker } from "@vis.gl/react-google-maps";
import { PanKalyanikContacts } from "@/const/contacts";
import { PanKalyanikCoord } from "./const";

export default function ContactsSection() {
  return (
    <section className="flex flex-col items-center justify-center w-10/12 mx-auto pb-5 gap-10">
      <div className="text-2xl md:text-3xl text-center font-heading font-semibold">
        Мы находимся <span className="text-gradient">тут</span>:
      </div>
      <div className="grid grid-cols-1 grid-rows-[350px,250px] md:grid-cols-2 md:grid-rows-[repeat(1,350px)] w-full gap-5">
        <Map
          mapId="pan_kalyanik"
          style={{ width: "100%", height: "350px" }}
          defaultCenter={{
            lat: PanKalyanikCoord.centerLat,
            lng: PanKalyanikCoord.centerLng,
          }}
          defaultZoom={17}>
          <AdvancedMarker
            position={{
              lat: PanKalyanikCoord.lat,
              lng: PanKalyanikCoord.lng,
            }}>
            <Pin />
          </AdvancedMarker>
        </Map>
        <div className="w-full flex flex-col text-center justify-center items-center">
          <div>{PanKalyanikContacts.adress}</div>
          <div className="font-thin pb-3.5">
            Вход со стороны внутреннего дворика
          </div>
          <div>{PanKalyanikContacts.workingHours[0]}</div>
          <div>{PanKalyanikContacts.workingHours[1]}</div>
        </div>
      </div>
    </section>
  );
}
