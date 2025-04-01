import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Taxation from "./pages/Taxation";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Economy from "./pages/Economy";
import Summary from "./pages/Summary";
import Advantages from "./pages/Advantages";
import Infrastructure from "./pages/Infrastructure";
import Industry from "./pages/Industry";
import Agriculture from "./pages/Agriculture";
import Opportunities from "./pages/Opportunities";
import Parks from "./pages/Parks";
import Investments from "./pages/Investments";
import RelocatedEnterprises from "./pages/RelocatedEnterprises";
import Contacts from "./pages/Contacts";
import Tourism from "./pages/Tourism";
import Energy from "./pages/Energy";

function App() {
  const [language, setLanguage] = useState("uk");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "uk" ? "en" : "uk"));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header toggleLanguage={toggleLanguage} language={language} />
        <main className="flex-grow pt-14">
          <Routes>
            <Route path="/" element={<Home language={language} />} />{" "}
            <Route path="/about" element={<About />} />
            <Route path="/economy" element={<Economy />} />
            <Route
              path="/summary"
              element={<Summary language={language} />}
            />{" "}
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route
              path="/industry"
              element={<Industry language={language} />}
            />{" "}
            <Route path="/agriculture" element={<Agriculture />} />
            <Route
              path="/investment"
              element={<Investments language={language} />}
            />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/parks" element={<Parks language={language} />} />{" "}
            <Route
              path="/relocated-enterprises"
              element={<RelocatedEnterprises language={language} />}
            />
            <Route
              path="/contacts"
              element={<Contacts language={language} />}
            />
            <Route
              path="/taxation"
              element={<Taxation language={language} />}
            />
            <Route path="/tourism" element={<Tourism language={language} />} />
            <Route path="/energy" element={<Energy language={language} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
