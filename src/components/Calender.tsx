import React, { useState } from "react";

const Calender: React.FC = () => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
];

const currentDate =  new Date()

const [currnetMonth,setCurrentMonth] =  useState(currentDate.getMonth)
const [currnetYear,setCurrentaYear] =  useState(currentDate.getFullYear)
const daysInMonth = new Date(currnetYear,currnetMonth+1,0).getDate
const fisrtDayOfMonth = new Date(currnetYear,currnetMonth,1)



  return (
    <div className="w-full min-w-112 bg-bg-black-2 rounded-2xl h-[calc(55%-2rem)] p-6 grid place-items-center">
      <div className="w-full flex justify-between items-center pl-4 mb-4 gap-x-4">
        <h2 className="text-3xl font-bold text-highlight">August</h2>
        <h2 className="text-3xl font-bold text-highlight">2025</h2>
        <div className="flex ml-auto gap-x-4">
          <div className="w-14 h-14 flex justify-center items-center cursor-pointer text-3xl bg-[#2c3542] rounded-[50%]">
            <i className="bx bx-chevron-left text-[#b88efc]"></i>
          </div>
          <div className="w-14 h-14 flex justify-center items-center cursor-pointer text-3xl bg-[#2c3542] rounded-[50%]">
            <i className="bx bx-chevron-right text-[#b88efc]"></i>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Sun
        </span>
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Mon
        </span>
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Tue
        </span>
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Wed
        </span>
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Thu
        </span>
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Fri
        </span>
        <span className="w-[calc(100%/7)] text-xl text-zinc-500 uppercase flex justify-center">
          Sat
        </span>
      </div>
      <div className="flex flex-wrap">
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">1</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">2</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">3</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">4</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">5</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">6</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">7</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">8</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center cursor-pointer">9</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>10</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>11</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>12</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>13</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>14</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>15</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>16</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>17</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>18</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>19</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>20</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>21</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>22</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>23</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>24</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>25</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>26</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>27</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>28</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>29</span>
        <span className=" w-[calc(100%/7)] text-xl text-zinc-500 flex justify-center aspect-1/1 items-center" cursor-pointer>30</span>
      </div>
    </div>
  );
};

export default Calender;
