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
  color: #8D0568;
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const Brands = style.img`
  margin: 50px 0;
  width: 100%;
`;

function Research() {
  return (
    <div>
      <HeroContainer>
        <Card
          videoName="research-170-espraiado.mp4"
          title="Research & Product Definition."
          text="Helping transform ideas into fully viable products."
          link="/"
        />
      </HeroContainer>

      <ContentContainer>
        <IntroContainer>
          <IntroTitle>
            "I’ve been helping universities, governments and companies moving
            from ideas to digital experiences. "
          </IntroTitle>
          <IntroRod>
            {"< "}Rod :){" />"}
          </IntroRod>

          <Brands src="/img/brands.png" />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="AUT Health and Future"
            text="We are rethinking the future of Māori community health integrated with
          digital experiences."
            footer="< work in progress />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="Westpac Te Reo Māori"
            text="Exploring Te Reo Māori learning digital experiences for the WestPac New Zealand staff."
            footer="< work in progress />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="SUTAM"
            text="Exploring meditation learning digital experiences for the Medini Vipassana centre, New Zealand."
            footer="< work in progress />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="University of Canterbury"
            text="Researched and prototyped a web and mobile app for helping Rock Climbers with their trainaments and field notes."
            footer="< from February 2019 to June 2019 />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="Brazilian Sports Ministry"
            text="Researched and prototyped a web app to help managing a Brazilian sports, education and research national program."
            footer="< from June 2017 to June 2019 />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="IDB"
            text="Researched and prototyped a web app to help managing 
            public investments associated with climate changes."
            footer="< from June 2017 to December 2017 />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="UFSC"
            text="Researched and prototyped an Open Access Digital Repository to help organize and share the information and knowledge of a Brazilian sports, education and research national program."
            footer="< from June 2009 to December 2019 />"
          />

          <CardDetailContent
            videoName="research-170-espraiado.mp4"
            title="9too"
            text="Researched and prototyped multiple VR digital experiences."
            footer="< from January 2016 to June 2017 />"
          />
        </IntroContainer>
        <Footer />
      </ContentContainer>
    </div>
  );
}

export default Research;
