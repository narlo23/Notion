import Post from "./Post/Post.js";
import SideBar from "./SideBar/SideBar.js";

export default function App({ $target }) {
  this.setState = (nextState) => {
    this.state = nextState;
  };

  const AddPage = async () => {
    const document = {
      title: "제목 없음",
      parent: null,
    };
    await createDocument(document);
    this.render();
  };

  const $sideBar = new SideBar({
    $target,
    initialState: [],
    addPage: AddPage,
  });

  const $post = new Post({
    $target,
  });

  this.route = () => {};
  this.route();
}
