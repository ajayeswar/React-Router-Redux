import React from "react";
import { Link } from "react-router-dom";

function Home({ history }) {
  return (
    <div>
      Home
      <Link to={"/about"}>
        <div>Go to About</div>
      </Link>
    </div>
  );
}

export default Home;
