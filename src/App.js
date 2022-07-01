import Header from "./components/Header";
import Opportunities from "./components/opportunities";
import Components from "./components/Components";
import "./style.css";
import Benefits from "./components/benefits";
import Process from "./components/process";
import Connect from "./components/connect";
import Results from "./components/results";
import Geography from "./components/geography";
import Footer from "./components/footer";
import IsMobial from "./components/isMobial";

function App() {
  return (
    <div className="App">
      <Header />
      <Opportunities />
      <Components />
      <IsMobial />
      <Process />
      <Connect />
      <Results />
      <Geography />

      <Footer />
    </div>
  );
}

export default App;
