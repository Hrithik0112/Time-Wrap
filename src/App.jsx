import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./utils";

function App() {
  console.table(getMonth(3));
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month />
        </div>
      </div>
    </>
  );
}

export default App;
