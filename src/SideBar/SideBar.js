import AddPageBtn from "./AddPageBtn.js";
import DocumentList from "./DocumentList.js";
import Header from "./Header.js";
import { getDocuments } from "../api/api.js";

export default function SideBar({ $target, initialState, onClick }) {
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
    initialState: {
      documents: ["가", "나", "다"],
    },
    onClick: {},
  });

  const $addPageBtn = new AddPageBtn({
    $target: $sidebar,
    onClick: {},
  });

  this.render = async () => {
    const $documents = await getDocuments();
    $documentList.setState({
      $documents,
    });
  };

  this.render();
}
