import "./App.css";
import {
  About,
  BabyCross,
  BeforeFooter,
  CrossClub,
  Hero,
  Info,
  Rewards,
  Team,
  Transformation,
  Utility
} from "./Components/index.js";
import { Footer, GlobalStyle, Header, Logos } from "./Utilities/index.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Logos />
      <About />
      <CrossClub />
      <Utility />
      <Info />
      <BabyCross />
      <Transformation />
      <Rewards />
    </div>
  );
}

export default App;
