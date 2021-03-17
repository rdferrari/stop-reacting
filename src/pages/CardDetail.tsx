import { useParams } from "react-router-dom";
import Header from "../components/Header";

function CardDetail() {
  let { id } = useParams<{ id: string }>();

  return (
    <div>
      <Header />
      <h1>Card detail {id}</h1>
    </div>
  );
}

export default CardDetail;
