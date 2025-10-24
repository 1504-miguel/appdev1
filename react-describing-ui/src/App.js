import React from "react";

export default function TodoList() {
  return (
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hedy Lamarr's Todos"),
      React.createElement("img", {
        src: "https://i.imgur.com/yXOvdOSs.jpg",
        alt: "Hedy Lamarr",
        className: "photo"
      }),
      React.createElement(
        "ul",
        null,
        React.createElement("li", null, "Invent new traffic lights"),
        React.createElement("li", null, "Rehearse a movie scene"),
        React.createElement("li", null, "Improve spectrum technology")
      )
    )
  );
}
