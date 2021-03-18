import style from "styled-components";

const VideoContainer = style.div`
  position: relative;
`;

const VideoEl = style.video`
display: inherit;
object-fit: cover;
left: 0;
height: 90vh;
position: absolute;
top: 0;
width: 100%;
z-index: -100;
`;

const Mask = style.div`
background-color: black;
height: 90vh;
position: absolute;
opacity: 0.55;
position: relative;
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
