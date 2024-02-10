import { ILocation } from "../types/location";

interface LocationItemProps {
  location: ILocation;
}

const LocationItem = ({ location }: LocationItemProps) => {
  return (
    <div className="p-5 bg-gray-200 rounded-lg">
      {location.opened ? (
        <p className="text-brand-green font-semibold">Abertp</p>
      ) : (
        <p className="text-brand-red font-semibold">Fechado</p>
      )}

      <h2 className="text-xl font-medium my-2">{location.title}</h2>

      <div
        className="text-brand-lightGrey"
        dangerouslySetInnerHTML={{ __html: location.content }}
      ></div>

      <div className="flex gap-2 mt-4">
        {location.mask && (
          <img
            width={75}
            height={75}
            src={`${location.mask}-mask.png`}
          ></img>
        )}
        {location.towel && (
          <img
            width={75}
            height={75}
            src={`${location.towel}-towel.png`}
          ></img>
        )}
        {location.fountain && (
          <img
            width={75}
            height={75}
            src={`${location.fountain}-fountain.png`}
          ></img>
        )}
        {location.locker_room && (
          <img
            width={75}
            height={75}
            src={`${location.locker_room}-lockerroom.png`}
          ></img>
        )}
      </div>

      <div className="grid grid-cols-2 mt-5 gap-6">
        {location?.schedules?.map((schedule) => (
          <div>
            <h3 className="text-xl font-medium">{schedule.meekdays}</h3>
            <p>{schedule.hour}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationItem;
