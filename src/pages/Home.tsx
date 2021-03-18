import style from "styled-components";
import Hero from "../components/Hero";
import Card from "../components/Card";

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
  margin-bottom: 130px;
  padding: 20px;
`;

const CardContainer = style.div`
  margin-bottom: 50px;
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
          <IntroTitle>
            "Stop Reacting Lab is my remote office, where I am helping to build
            successful and balanced digital experiences."
          </IntroTitle>
          <IntroRod>
            {"< "}Rod :){" />"}
          </IntroRod>
        </IntroContainer>

        <CardContainer>
          <Card
            videoName="free-style-flowbodies.mp4"
            title="Strategy & Product Definition."
            text="I can help you transform an idea into a fully viable product, starting by defining the goals and building a roadmap to the best possible solution."
            link="/"
            button="our work"
          />
        </CardContainer>

        <CardContainer>
          <Card
            videoName="coding-video-edit.mp4"
            title="Software engineer"
            text="I build serverless React applications that are efficient, flexible and easy to maintain."
            link="/"
            button="our work"
          />
        </CardContainer>
        <CardContainer>
          <Card
            videoName="research-flowbodies.mp4"
            title="UI/UX Design"
            text="I design beautiful, easy-to-use mobile and web products that meet your projetc and users needs."
            link="/"
            button="our work"
          />
        </CardContainer>
      </ContentContainer>
    </div>
  );
}

export default Home;
