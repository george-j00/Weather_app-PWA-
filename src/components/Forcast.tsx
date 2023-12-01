// import { useSelector } from "react-redux";
// import { RootState } from "../ReduxStore/store";

const Forcast = ({ data }: any) => {
  const {
    date,
    day: { maxtemp_c },
    day: {
      condition: { text },
    },
  } = data;
  return (
    <>
      <div className="flex flex-col w-56 h-32 border rounded-3xl p-4 text-sm justify-center items-center">
        <p className="text-lg font-semibold">{date}</p>
        <p>Max Temp: {maxtemp_c}°C</p>
        <p>Condition: {text}</p>
      </div>
    </>
  );
};

export default Forcast;
