import { Link } from "react-router-dom";
import style from "styled-components";

const VideoEl = style.video`
object-fit: cover;
height: 80vh;
width: 100%;

@media only screen and (min-width: 768px) {
  height: 80vh;
}
`;

// const ContentContainer = style.div`
//   background-color: #ebebeb;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   margin-left: 20px;
//   margin-top: -10vh;
//   position: absolute;
//   width: 90%;

// @media only screen and (min-width: 768px) {
//   width: 400px;
//   margin-top: -90vh;
// }
// `;

const ContentContainer = style.div`
  background-color: rgba(0, 0, 0, 0.4);
  margin-left: 0;
  margin-top: -80.5vh;
  height: 80vh;
  position: absolute;
  width: 100%;

@media only screen and (min-width: 768px) {
  
}
`;

const TextContainer = style.div`
  padding: 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px 40px;
  }
`;

const Title = style.h3`
color: #ebebeb;
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const Text = style.p`
color: #ebebeb;
font-family: textFontLight;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

const Button = style.button`
  background-color: #00D7F4;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  color: #3C3C3C;
  cursor: pointer;
  font-family: textFontLight;
  font-size: 18px;
  margin: 20px 0;
  padding: 20px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

interface ICardProps {
  videoName: string;
  title: string;
  text: string;
  link: string;
  button?: string;
}

const VIDEO_URL =
  "https://stop-reacting-media.s3-ap-southeast-2.amazonaws.com/";

function Card({ videoName, title, text, link, button }: ICardProps) {
  return (
    <>
      <VideoEl autoPlay loop muted playsInline>
        <source src={`${VIDEO_URL}${videoName}`} type="video/mp4" /> Your
        browser does not support HTML5 video.{" "}
      </VideoEl>

      <ContentContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
          {button && (
            <Link to={link}>
              <Button>{button}</Button>
            </Link>
          )}
        </TextContainer>
      </ContentContainer>
    </>
  );
}

export default Card;
