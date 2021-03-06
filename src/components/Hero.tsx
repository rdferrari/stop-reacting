import style from "styled-components";
import Video from "./Video";

const HeroContainer = style.div`
  position: absolute;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
`;

const HeroIntroContainer = style.div`
  margin-top: 40vh;
`;

const HeroTitle = style.h1`
  color: #ebebeb;
  font-size: 28px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

const HeroText = style.p`
  color: #ebebeb;
  font-size: 18px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <Video videoName="Hero-Highline-small-adjusted.mp4" />
      <HeroIntroContainer>
        <HeroTitle>Stop Reacting Lab</HeroTitle>
        <HeroText>
          {"< "}balanced digital experiences{" />"}
        </HeroText>
      </HeroIntroContainer>
    </HeroContainer>
  );
}

export default Hero;
