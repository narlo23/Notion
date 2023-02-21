import Post from "./Post/Post.js";
import SideBar from "./SideBar/SideBar.js";
import { createDocument, deleteDocument, getDocuments } from "./api/api.js";
import { initRouter, push } from "./router/router.js";
import { getItem, setItem } from "./storage/storage.js";

export default function App({ $target }) {
  let timer = null;

  this.state = {
    documentList: [],
    selected: "",
  };

  const AddPage = async (id) => {
    await createDocument(id);
    await this.render();
  };

  const DeletePage = async (id) => {
    await deleteDocument(id);
    await this.render();
  };

  const GetPages = async () => {
    const $documents = await getDocuments();
    console.log($documents);
    this.setState({ ...this.state, documentList: $documents });
  };

  const $sideBar = new SideBar({
    $target,
    initialState: {
      documentList: this.state.documentList,
      selected: this.state.selected,
    },
    addPage: AddPage,
    deletePage: DeletePage,
  });

  const $post = new Post({
    $target,
    initialState: {
      selected: this.state.selected,
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    $sideBar.setState({
      ...this.state,
      documentList: this.state.documentList,
    });
  };

  this.render = () => {
    GetPages();
  };

  this.render();
}
