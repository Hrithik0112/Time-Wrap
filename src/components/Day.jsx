import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Day({ day, rowIdx }) {
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
  function getCurrentDay() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && <p className="text-sm mt-2">{day.format("ddd")}</p>}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>{day.format("DD")}</p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {""}
      </div>
    </div>
  );
}

export default Day;
