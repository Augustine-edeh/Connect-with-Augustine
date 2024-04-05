import Avatar from "./Avatar";

const App = () => {
  return (
    <div className="grid place-items-center h-screen bg-off_black">
      <main className="grid place-items-center bg-dark_grey text-white p-5 rounded-xl">
        <Avatar />
        <p>Name</p>

        <p>Location</p>

        <p>Description</p>

        <div>links</div>
      </main>
    </div>
  );
};
export default App;
