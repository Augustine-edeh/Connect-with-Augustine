import Avatar from "./components/Avatar";
import Description from "./components/Description";
import Links from "./components/Links";
import Location from "./components/Location";
import Name from "./components/Name";

const App = () => {
  return (
    <div className="min-h-screen bg-off_black px-5 py-10">
      <main className="grid place-items-center bg-dark_grey text-white p-4 rounded-xl max-w-md mx-auto">
        <Avatar />
        <Name />
        <Location />
        <Description />
        <Links />
      </main>
    </div>
  );
};
export default App;
