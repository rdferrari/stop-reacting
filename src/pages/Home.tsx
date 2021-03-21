import ScrollAnimation from "react-animate-on-scroll";

import style from "styled-components";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import "animate.css/animate.compat.css";

const ContentContainer = style.div`
  left: 0;
  right: 0;
  margin-left:auto;
  margin-right:auto;
  position: absolute;
  width: 100%;
  top: 105vh;
  z-index: 105;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const IntroContainer = style.div`
  margin-bottom: 50px;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 130px;
  }
`;

const CardContainer = style.div`
  margin-bottom: 400px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

const IntroTitle = style.h2`
  color: #3C3C3C;
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const IntroRod = style.h2`
  color: #00D7F4;
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

function Home() {
  return (
    <div>
      <Hero />
      <ContentContainer>
        <IntroContainer>
          <ScrollAnimation animateIn="fadeIn">
            <IntroTitle>
              "Stop Reacting Lab is my remote office, where I am helping
              universities, governments and companies to build successful and
              balanced digital experiences."
            </IntroTitle>

            <IntroRod>
              {"< "}Rod :){" />"}
            </IntroRod>
          </ScrollAnimation>
        </IntroContainer>

        <CardContainer>
          <Card
            videoName="research-170-espraiado.mp4"
            title="Research & Product Definition."
            text="Helping transform ideas into fully viable products."
            link="/research"
            button="case studies"
          />
        </CardContainer>

        <CardContainer>
          <Card
            videoName="software-engineering-floating-loop-edit.mp4"
            title="Software engineer"
            text="Building serverless React applications that are efficient, flexible and easy to maintain."
            link="/"
            button="case studies"
          />
        </CardContainer>
        <CardContainer>
          <Card
            videoName="design-climb.mp4"
            title="UI/UX Design"
            text="Designing beautiful, easy-to-use mobile and web products that meet clients and users needs."
            link="/"
            button="case studies"
          />
        </CardContainer>
        <Footer />
      </ContentContainer>
    </div>
  );
}

export default Home;
