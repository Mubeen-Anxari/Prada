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
export default function Home() {
  return (
    <div>
      <TopNav />
      <Navbar1/>
      <HeroSection/>
      <Logos/>
      <Text/>
      <Products/>
      <TopSeller/>
      <Cards/>
      <Footer/>
    </div>
  );
}
