import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";

const BgVideo = () => {
  const currentState = useSelector((state: RootState) => state.climate.current);
  
  const base_url = "/src/assets/";
  const videoUrl =
    currentState?.condition.text === "Mist"
      ? base_url + "mist.mp4"
      : currentState?.condition.text === "Partly cloudy "
      ? base_url + "cloudy.mp4"
      : currentState?.condition.text === "Patchy rain possible"
      ? base_url + "raining.mp4"
      : currentState?.condition.text === "Sunny"
      ? base_url + "sunny.mp4"
      : base_url + "cloudy.mp4";

  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={videoUrl}
      ></video>
    </>
  );
};

export default BgVideo;
