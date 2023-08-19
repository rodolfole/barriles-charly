import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Map from "./sections/Map";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Us from "./sections/Us";
import Vision from "./sections/Vision";

import data from "./data";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Map
        height="500px"
        ubications={[
          {
            ...data.ubication,
            info: {
              business: data.contact.company,
              ...data.ubication.info,
            },
          },
        ]}
      />
      <Us />
      <Clients />
      <div
        className={`h-full md:h-[300px] flex flex-col md:flex-row justify-center items-center bg-fixed bg-no-repeat bg-cover p-20`}
        style={{ backgroundImage: `url(${data.about.vision.img})` }}
        id="mission"
      >
        <Vision />
        <Mission />
      </div>
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
