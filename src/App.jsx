import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Section1 } from "./Components/Section1";
import { Section2 } from "./Components/Section2";
import { Section3 } from "./Components/Section3";
import { Section4 } from "./Components/Section4";
import { Section5 } from "./Components/Section5";
import { Section6 } from "./Components/Section6";
import { Section7 } from "./Components/Section7";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-6">
      <div className="pt-3 px-24">
        <Header />
      </div>
      <Section1 />
      <div className="py-14">
        <Section2 />
      </div>
      <div className="pb-14">
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section6 />
      </div>
      <div>
        <Section7 />
      </div>
    </div>
  );
}

export default App;
