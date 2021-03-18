import style from "styled-components";

interface IStyleProps {
  maskColor?: string;
  topMargin?: string;
  leftMargin?: string;
  videoHeight?: string;
  videoWidth?: string;
}

const VideoContainer = style.div<IStyleProps>`
    position: absolute;
    top: ${(props) => props.topMargin || "0"};
    left: ${(props) => props.leftMargin || "0"};
    width: ${(props) => props.videoWidth || "iherint"};
    height: ${(props) => props.videoHeight || "iherint"};
    z-index: 99;
`;

const Mask = style.div<IStyleProps>`
    background-color: ${(props) => props.maskColor || "rgba(0, 0, 0, 0.5)"};
    position: relative;
    width: ${(props) => props.videoWidth || "iherint"};
    height: ${(props) => props.videoHeight || "iherint"};
    z-index: 98;
`;

const VideoElement = style.video<IStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.videoWidth || "iherint"};
    height: ${(props) => props.videoHeight || "iherint"};
    z-index: 97;
`;

const VIDEO_URL =
  "https://stop-reacting-media.s3-ap-southeast-2.amazonaws.com/";

interface IProps {
  maskColor?: string;
  leftMargin?: string;
  topMargin?: string;
  videoName: string;
  videoWidth?: string;
  videoHeight?: string;
}

function Video({
  videoName,
  videoWidth,
  videoHeight,
  maskColor,
  leftMargin,
  topMargin,
}: IProps) {
  return (
    <VideoContainer
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      topMargin={topMargin}
      leftMargin={leftMargin}
    >
      <Mask
        videoWidth={videoWidth}
        videoHeight={videoHeight}
        maskColor={maskColor}
      ></Mask>
      <VideoElement
        videoWidth={videoWidth}
        videoHeight={videoHeight}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${VIDEO_URL}${videoName}`} type="video/mp4" /> Your
        browser does not support HTML5 video.{" "}
      </VideoElement>
    </VideoContainer>
  );
}

export default Video;
