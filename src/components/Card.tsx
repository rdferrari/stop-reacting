import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
      <p>This is a card 0</p>
      <Link to="/card/0">Detail</Link>
    </div>
  );
}

export default Card;
