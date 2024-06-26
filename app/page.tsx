import { Button } from "@nextui-org/react";
import TopNav from "./components/TopNav";
import Navbar1 from "./components/Navbar1";
import HeroSection from "./components/HeroSection";
import Logos from "./components/Logos";
import Text from "./components/Text";
import Products from "./components/Products";
import TopSeller from "./components/TopSeller";
import Cards from "./components/Card";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Api from "./Api-call/Page";
export default function Home() {
  return (
    <div>
       <TopNav />
      <Navbar1/>
      <HeroSection/>
      <Logos/>
      <Text/>
      <Products/>
      <div className=" font-bold text-3xl m-2 text-center">Fake-Store-Api</div>
       <Api/>
      <TopSeller/>
      <Cards/> 
      <Footer/>
       <Footer1/> 
       <div>
       
       </div>
    </div>
  );
}
