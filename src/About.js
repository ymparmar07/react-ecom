import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Hari impex Ecommerce",
  };
 
  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default About;
