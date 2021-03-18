import Video from "./Video";

function Hero() {
  return (
    <div>
      <Video
        maskColor="rgba(2, 128, 144, 0.3)"
        leftMargin="1600px"
        topMargin="0"
        videoName="8-coding.mp4"
        videoWidth="372px"
        videoHeight="1080px"
      />
      <Video
        maskColor="rgba(0, 168, 150, 0.3)"
        leftMargin="1400px"
        topMargin="450px"
        videoName="7-climb.mp4"
        videoWidth="462px"
        videoHeight="410px"
      />
      <Video
        maskColor="rgba(2, 128, 144, 0.3)"
        leftMargin="1200px"
        topMargin="0"
        videoName="5-motoca.mp4"
        videoWidth="220px"
        videoHeight="1080px"
      />
      <Video
        maskColor="rgba(0, 168, 150, 0.3)"
        leftMargin="1350px"
        topMargin="20px"
        videoName="6-motoca.mp4"
        videoWidth="590px"
        videoHeight="220px"
      />
      <Video
        maskColor="rgba(2, 128, 144, 0.3)"
        leftMargin="750px"
        topMargin="220px"
        videoName="4-bici.mp4"
        videoWidth="558px"
        videoHeight="560px"
      />
      <Video
        maskColor="rgba(0, 168, 150, 0.3)"
        leftMargin="100px"
        topMargin="120px"
        videoName="1-highline.mp4"
        videoWidth="220px"
        videoHeight="922px"
      />
      <Video
        maskColor="rgba(2, 102, 141, 0.3)"
        leftMargin="296px"
        topMargin="30px"
        videoName="3-motoca.mp4"
        videoWidth="678px"
        videoHeight="296px"
      />
      <Video
        maskColor="rgba(2, 195, 154, 0.3)"
        leftMargin="230px"
        topMargin="280px"
        videoName="2-bici.mp4"
        videoWidth="320px"
        videoHeight="192px"
      />
    </div>
  );
}

export default Hero;
