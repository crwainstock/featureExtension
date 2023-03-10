import { NavLink } from "react-router-dom";
import defaultImg from "../images/spider_eyes.jpg";

function ErrorPage() {
  return (
    <div className="container">
      <h1>Oops! Something went wrong.</h1>
      <p>Please return to the main site.</p>

      <img src={defaultImg} alt="spider eyes" className="w-25 rounded" />
      <div className="row mt-3 mb-3">
        <NavLink exact to="/">
          <button type="button" className="btn bg-transparent homeBtn">
            Go back Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
