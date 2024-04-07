import Avatar from "./components/Avatar";
import Description from "./components/Description";
import Links from "./components/Links";
import Location from "./components/Location";
import Name from "./components/Name";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-off_black p-6">
      <main className="grid place-items-center bg-dark_grey text-white px-5 py-10 rounded-xl max-w-md">
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
