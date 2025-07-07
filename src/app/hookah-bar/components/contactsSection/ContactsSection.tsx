import { APIProvider } from "@vis.gl/react-google-maps";
import { Map, Pin, AdvancedMarker } from "@vis.gl/react-google-maps";
import { PanKalyanik } from "@/const/panKalyanik";

export default function ContactsSection() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}>
      <section className="flex flex-col items-center justify-center w-10/12 mx-auto pb-5 gap-10">
        <div className="text-2xl md:text-3xl text-center font-heading font-semibold">
          Мы находимся <span className="text-gradient">тут</span>:
        </div>
        <div className="grid grid-cols-1 grid-rows-[350px,250px] md:grid-cols-2 md:grid-rows-[repeat(1,350px)] w-full gap-5">
          <Map
            mapId="pan_kalyanik"
            style={{ width: "100%", height: "350px" }}
            defaultCenter={{
              lat: PanKalyanik.coords.centerLat,
              lng: PanKalyanik.coords.centerLng,
            }}
            defaultZoom={17}>
            <AdvancedMarker
              position={{
                lat: PanKalyanik.coords.lat,
                lng: PanKalyanik.coords.lng,
              }}>
              <Pin />
            </AdvancedMarker>
          </Map>
          <div className="w-full flex flex-col text-center justify-center items-center">
            <div>{PanKalyanik.contacts.adress}</div>
            <div className="font-thin pb-3.5">
              Вход со стороны внутреннего дворика
            </div>
            <div>{PanKalyanik.contacts.workingHours[0]}</div>
            <div>{PanKalyanik.contacts.workingHours[1]}</div>
          </div>
        </div>
      </section>
    </APIProvider>
  );
}
