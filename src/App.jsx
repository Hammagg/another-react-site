import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Tier } from "./components/Tier/Tier";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Tier />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
