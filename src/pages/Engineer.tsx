import style from "styled-components";
import Card from "../components/Card";
import CardDetailContent from "../components/CardDetailContent";
import Footer from "../components/Footer";

const HeroContainer = style.div`
  @media only screen and (min-width: 768px) {
    margin: 120px 50px;
  }
`;

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

const IntroTitle = style.h2`
  color: #3C3C3C;
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const IntroRod = style.h2`
  color: #02C39A;
  font-size: 30px;
  margin-bottom: 100px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const Image = style.img`
  margin: 50px 0;
  width: 100%;
`;

const Iframe = style.iframe`
  margin: 100px 0;
`;

function Engineer() {
  return (
    <div>
      <HeroContainer>
        <Card
          videoName="coding-hero.mp4"
          title="Software engineer"
          text="Building serverless React applications that are efficient, flexible and easy to maintain."
          link="/"
        />
      </HeroContainer>

      <ContentContainer>
        <IntroContainer>
          <IntroTitle>
            "Coding JavaScript and TypeScript full-stack application with React,
            React Native and AWS Amplify."
          </IntroTitle>
          <IntroRod>
            {"< "}Rod :){" />"}
          </IntroRod>

          <Image src="/img/stack.png" />

          <Iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/-Vm-4BbY58Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></Iframe>

          <CardDetailContent
            videoName="coding-hero.mp4"
            title="GitHub"
            text="Explore my React Native + Typescript + AWS Amplify boilerplate to start new projects."
            footer="< go to the project />"
          />
        </IntroContainer>
        <Footer />
      </ContentContainer>
    </div>
  );
}

export default Engineer;
