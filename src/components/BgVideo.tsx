import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";

const BgVideo = () => {
  const currentState = useSelector((state: RootState) => state.climate.current);
  
  const videoUrl =
    currentState?.condition.text === "Mist"
      ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448143/mist_m7bxfh.mp4"
      : currentState?.condition.text === "Partly cloudy "
      ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701447984/slu6zxtm2utbwfsyqi1i.mp4"
      : currentState?.condition.text === "Patchy rain possible"
      ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448236/raining_yzxcop.mp4"
      : currentState?.condition.text === "Sunny"
      ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448356/sunny_yhecfv.mp4"
      : "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701447984/slu6zxtm2utbwfsyqi1i.mp4";

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
