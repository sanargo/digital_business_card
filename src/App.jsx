import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <Info />
      <main className="container">
        <About />
        <Interests />
      </main>
      <Footer />
    </>
  );
}

export default App;
