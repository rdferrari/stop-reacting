import { useParams } from "react-router-dom";
import Card from "../components/Card";

function CardDetail() {
  let { id } = useParams<{ id: string }>();

  return (
    <div>
      <Card
        videoName="research-170-espraiado.mp4"
        title="Research & Product Definition."
        text="Helping transform ideas into a fully viable products."
        link="/"
      />
      <h1>Card detail {id}</h1>
    </div>
  );
}

export default CardDetail;
