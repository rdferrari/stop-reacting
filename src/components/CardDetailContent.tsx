import style from "styled-components";

const CardDetail = style.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

const VideoEl = style.video`
object-fit: cover;
height: 60vh;
width: 100%;

@media only screen and (min-width: 768px) {
  width: 50%;
}
`;

const TextBox = style.div`
margin: 20px;

@media only screen and (min-width: 768px) {
  margin: 0 0 20px 60px;
}
`;

const TextBoxTitle = style.h3`
font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const TextBoxText = style.p`
font-size: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const TextBoxFooter = style.p`
  color: #8D0568;
  font-size: 12px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const VIDEO_URL =
  "https://stop-reacting-media.s3-ap-southeast-2.amazonaws.com/";

interface ICardDetailContentProps {
  videoName: string;
  title: string;
  text: string;
  footer: string;
}

function CardDetailContent({
  videoName,
  title,
  text,
  footer,
}: ICardDetailContentProps) {
  return (
    <CardDetail>
      <VideoEl autoPlay loop muted playsInline>
        <source src={`${VIDEO_URL}${videoName}`} type="video/mp4" /> Your
        browser does not support HTML5 video.{" "}
      </VideoEl>

      <TextBox>
        <TextBoxTitle>{title}</TextBoxTitle>
        <TextBoxText>{text}</TextBoxText>
        <TextBoxFooter>{footer}</TextBoxFooter>
      </TextBox>
    </CardDetail>
  );
}

export default CardDetailContent;
