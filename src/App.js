import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <>
      <Navbar />
      <Tabs />

      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
