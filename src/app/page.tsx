import Image from "next/image";
import Header from "./Components/header"
import Hero from "./Components/hero";
import About from "./Components/about";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <div className="container1">
      <Header/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}
