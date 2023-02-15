import DocumentList from "./DocumentList.js";
import Header from "./Header.js";

export default function SideBar({ $target }) {
  const $sidebar = document.createElement("div");
  $sidebar.className = "sideBar";
  $target.appendChild($sidebar);

  this.setState = (nextState) => {
    this.state = { ...this.state, nextState };
    this.render();
  };

  const $header = new Header({
    $target: $sidebar,
    initialState: {
      userName: "📂 효진의 Notion",
    },
  });

  const $documentList = new DocumentList({
    $target: $sidebar,
    initialState: {},
  });

  this.render = () => {};

  this.render();
}

