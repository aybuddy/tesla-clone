import React from 'react';
import Section from '../components/Section';
import { Container } from './Home.styles';
import {
  model3,
  modelS,
  modelX,
  modelY,
  solarPanels,
  solarRoof,
  accessories,
} from '../data/data';

const Home = () => {
  return (
    <Container>
      <Section
        heading={modelS.heading}
        description={modelS.description}
        leftBtn={modelS.leftBtn}
        rightBtn={modelS.rightBtn}
        bgImg={modelS.bgImg}
      />
      <Section
        heading={modelY.heading}
        description={modelY.description}
        leftBtn={modelY.leftBtn}
        rightBtn={modelY.rightBtn}
        bgImg={modelY.bgImg}
      />
      <Section
        heading={model3.heading}
        description={model3.description}
        leftBtn={model3.leftBtn}
        rightBtn={model3.rightBtn}
        bgImg={model3.bgImg}
      />
      <Section
        heading={modelX.heading}
        description={modelX.description}
        leftBtn={modelX.leftBtn}
        rightBtn={modelX.rightBtn}
        bgImg={modelX.bgImg}
      />
      <Section
        heading={solarPanels.heading}
        description={solarPanels.description}
        leftBtn={solarPanels.leftBtn}
        rightBtn={solarPanels.rightBtn}
        bgImg={solarPanels.bgImg}
      />
      <Section
        heading={solarRoof.heading}
        description={solarRoof.description}
        leftBtn={solarRoof.leftBtn}
        rightBtn={solarRoof.rightBtn}
        bgImg={solarRoof.bgImg}
      />
      <Section
        heading={accessories.heading}
        description={accessories.description}
        leftBtn={accessories.leftBtn}
        rightBtn={accessories.rightBtn}
        bgImg={accessories.bgImg}
      />
    </Container>
  );
};

export default Home;
