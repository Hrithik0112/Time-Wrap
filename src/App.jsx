import { useContext, useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./utils";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentmonth] = useState(getMonth());

  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentmonth(getMonth(monthIndex));
  }, [monthIndex]);

  // console.table(getMonth(3));
  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
