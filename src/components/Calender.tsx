import React, { useState } from "react";

const Calender: React.FC = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();

  const [currnetMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currnetYear, setCurrentaYear] = useState(currentDate.getFullYear());
  const daysInMonth = new Date(currnetYear, currnetMonth + 1, 0).getDate()
  const fisrtDayOfMonth = new Date(currnetYear, currnetMonth, 1).getDay()

  const prevMonth = ()=>{
    setCurrentMonth(prevMonth => (
      prevMonth === 0 ? 11 : prevMonth - 1
    ))
    setCurrentaYear(prevYear =>(
      currnetMonth === 11 ? prevYear - 1 : prevYear
    ))
  }
  const nextMonth = ()=>{
    setCurrentMonth(prevMonth => (
      prevMonth === 0 ? 11 : prevMonth + 1
    ))
    setCurrentaYear(prevYear =>(
      currnetMonth === 11 ? prevYear + 1 : prevYear
    ))
  }

  return (
    <div className="w-full min-w-112 bg-bg-black-2 rounded-2xl h-[calc(55%-2rem)] p-2 grid place-items-center">
      <div className="w-full flex justify-between items-center pl-4 mb-4 gap-x-4">
        <h2 className="text-3xl font-bold text-highlight">
          {months[currnetMonth]}
        </h2>
        <h2 className="text-3xl font-bold text-highlight">{currnetYear}</h2>
        <div className="flex ml-auto gap-x-4">
          <div className="w-14 h-14 flex justify-center items-center cursor-pointer text-3xl bg-[#2c3542] rounded-[50%]"
          onClick={prevMonth}>
            <i className="bx bx-chevron-left text-[#b88efc]"></i>
          </div>
          <div className="w-14 h-14 flex justify-center items-center cursor-pointer text-3xl bg-[#2c3542] rounded-[50%]"
          onClick={nextMonth}>
            <i className="bx bx-chevron-right text-[#b88efc]"></i>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        {weekDays.map((day, index) => (
          <span
            key={index}
            className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center"
          >
            {day}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap">
        {[
          ...Array(fisrtDayOfMonth).keys()].map((_, index) => (
            <span
              key={`empty-${index}`}
              className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer"
            ></span>
          ))
        }
        {[...Array(daysInMonth).keys()].map(day=>(
           <span key={day+1} className={` w-[calc(100%/7)]  flex justify-center aspect-square items-center cursor-pointer ${day+1 === currentDate.getDay()  && currnetMonth === currentDate.getMonth() && currnetYear === currentDate.getFullYear() ? "text-2xl bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full":"text-sm text-zinc-500"}`}>
          {day+1}
        </span>
        ))}
      </div>
    </div>
  );
};

export default Calender;
