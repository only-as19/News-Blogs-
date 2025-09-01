import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
const Weather: React.FC = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetachDefaultLocation = async () => {
      const defaultLocation = "Karachi";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=cdabf15c158ce52d0ea6f75327c25a21`;
      const response = await axios.get(url);
      setData(response.data);
    };
    fetachDefaultLocation();
  }, []);

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=cdabf15c158ce52d0ea6f75327c25a21`;
    try {
      const response = await axios.get(url);
      if (response.data.cod !== 200) {
        setData({
          notFound: true,
        });
      } else {
        setData(response.data);
        setLocation("");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setData({
          notFound: true,
        });
      } else {
        console.error("An unexpected error occured", error);
      }
    }
  };

  const onKeyDown = (e)=>{
    if(e.key==='Enter'){
      search()
    }
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="w-full min-w-112 bg-bg-black-2 rounded-2xl h-[45%] py-8 px-6 flex justify-center items-center flex-col gap-y-6">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon
            className="text-4xl text-highlight"
            icon={faLocationDot}
          />
          <div className="text-3xl text-highlight font-bold font-comfortaa">{data.name}</div>
        </div>
        <div className="relative">
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocation}
            onKeyDown={onKeyDown}
            placeholder="Enter Location"
            className="bg-transparent border-0 border-b-2 border-b-gray-400 outline-none text-2xl text-highlight"
            style={{ width: "clamp(15rem,14cqi,25rem)" }}
          />
          <FontAwesomeIcon
            className="absolute top-6/12 -translate-y-6/12 text-3xl right-4"
            icon={faMagnifyingGlass}
            onClick={search}
          />
        </div>
      </div>
      {data.notFound ? (
        <div className="text-2xl mb-40">Not Found 🫡</div>
      ) : (
        <div className="flex justify-center items-center gap-y-4 flex-col">
          {/* <i className="bxr  bx-sun text-[5rem] text-[#ffc87c]"></i> */}
          {data.weather?.[0]?.icon ? (
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-20 h-20"
            />
          ) : null}
          <div className="font-comfortaa">{data.weather ? data.weather[0].main : null}</div>
          <div className="font-comfortaa">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
