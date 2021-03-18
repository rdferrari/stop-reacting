import style from "styled-components";

const VideoContainer = style.div`
  position: relative;
`;

const VideoEl = style.video`
object-fit: cover;
height: 100vh;
position: absolute;
width: 100%;
z-index: -100;
`;

const Mask = style.div`
background-color: #C78200;
height: 100vh;
position: absolute;
opacity: 0.30;
width: 100%;
z-index: -99;
`;

const VIDEO_URL =
  "https://stop-reacting-media.s3-ap-southeast-2.amazonaws.com/";

interface IProps {
  videoName: string;
}

function Video({ videoName }: IProps) {
  return (
    <VideoContainer>
      <Mask></Mask>
      <VideoEl autoPlay loop muted playsInline>
        <source src={`${VIDEO_URL}${videoName}`} type="video/mp4" /> Your
        browser does not support HTML5 video.{" "}
      </VideoEl>
    </VideoContainer>
  );
}

export default Video;
