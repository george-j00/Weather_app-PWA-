
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
        <div className="flex flex-col border rounded-3xl p-4 text-sm justify-center items-center">
          <p className="text-md  font-bold ">{date}</p>
          <p className="mt-3">Max Temp: {maxtemp_c}°C</p>
          <p>Condition: {text}</p>
        </div>
    </>
  );
};

export default Forcast;
