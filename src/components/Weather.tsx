import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
const Weather: React.FC = () => {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const search = async ()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cdabf15c158ce52d0ea6f75327c25a21`

    const response = await axios.get(url)
    setData(response.data)
    setLocation('')
    console.log(location)
  }

  const handleLocation= (e)=>{
    setLocation(e.target.value)
  }



  return (
    <div className="w-full min-w-112 bg-bg-black-2 rounded-2xl h-[45%] py-8 px-6 flex justify-center items-center flex-col gap-y-6">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon
            className="text-4xl text-highlight"
            icon={faLocationDot}
          />
          <div className="text-3xl text-highlight font-bold">{data.name}</div>
        </div>
        <div className="relative">
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocation}
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
      <div className="flex justify-center items-center gap-y-4 flex-col">
        <i className="bxr  bx-sun text-[5rem] text-[#ffc87c]"></i>
        <div>Clear</div>
        <div>29°</div>
      </div>
    </div>
  );
};

export default Weather;
