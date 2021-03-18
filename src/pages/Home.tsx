import style from "styled-components";
import Hero from "../components/Hero";
import Card from "../components/Card";

const ContentContainer = style.div`
  position: absolute;
  z-index: 100;
`;

function Home() {
  return (
    <div>
      <Hero />
      <ContentContainer>
        <h1>Home</h1>
        <Card />
      </ContentContainer>
    </div>
  );
}

export default Home;
