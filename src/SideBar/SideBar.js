import AddPageBtn from "./AddPageBtn.js";
import DocumentList from "./DocumentList.js";
import Header from "./Header.js";
import { getDocuments, createDocument } from "../api/api.js";

export default function SideBar({ $target, initialState, addPage }) {
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
    initialState: [],
    addPage,
  });

  const $addPageBtn = new AddPageBtn({
    $target: $sidebar,
    initialState: {
      text: "제목 없음",
    },
  });

  this.render = async () => {
    const $documents = await getDocuments();
    console.log($documents);
    $documentList.setState($documents);
  };

  this.render();
}
