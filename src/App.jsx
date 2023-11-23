import { getMonth } from "./utils";

function App() {
  console.table(getMonth(3));
  return (
    <main>
      <header className="font-bold text-3xl">Welcome To the Dark Side!!</header>
    </main>
  );
}

export default App;
