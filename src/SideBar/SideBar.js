import AddPageBtn from "./AddPageBtn.js";
import DocumentList from "./DocumentList.js";
import Header from "./Header.js";

export default function SideBar({
  $target,
  initialState,
  addPage,
  deletePage,
}) {
  const $sidebar = document.createElement("div");
  $sidebar.className = "sideBar";
  $target.appendChild($sidebar);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    $documentList.setState(this.state);
  };

  const $header = new Header({
    $target: $sidebar,
    initialState: {
      userName: "📂 효진의 Notion",
    },
  });

  const $documentList = new DocumentList({
    $target: $sidebar,
    initialState: this.state,
    addPage,
    deletePage,
  });

  const $addPageBtn = new AddPageBtn({
    $target: $sidebar,
    initialState: {
      text: "새 페이지",
    },
    addPage,
  });

  this.render = () => {};

  this.render();
}
