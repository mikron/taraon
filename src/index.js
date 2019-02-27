import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import G from "./app/something";

const app = new App();
const app1 = new App();
const app2 = new G();
const o1 = { a: 4 };
const o2 = { ...o1, j: 5 };

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

////React.createElement()
ReactDOM.render(
  [
    <div>
      <span>
        <a>
          <h1 />
        </a>
      </span>
      <Welcome />
    </div>
  ],
  document.getElementById("root")
);
