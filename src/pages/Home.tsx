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
  top: 95vh;
  z-index: 105;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`;

const IntroContainer = style.div`
  padding: 20px;
`;

const IntroTitle = style.h2`
  color: #3C3C3C;
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
            Software engineering, UI and UX designing, digital media creating
            and researching. This is what I am doing since I developed my first
            Open Access Digital Repository in 2006.
          </IntroTitle>
        </IntroContainer>
        <Card />
      </ContentContainer>
    </div>
  );
}

export default Home;
