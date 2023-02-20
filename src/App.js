import Post from "./Post/Post.js";
import SideBar from "./SideBar/SideBar.js";
import { createDocument, deleteDocument, getDocuments } from "./api/api.js";
export default function App({ $target }) {
  this.state = {
    documentList: [],
  };

  const AddPage = async () => {
    const document = {
      title: "제목 없음",
      parent: null,
    };
    await createDocument(document);
    this.render();
  };

  const DeletePage = async (id) => {
    await deleteDocument(id);
    this.render();
  };

  const GetPages = async () => {
    const $documents = await getDocuments();
    this.setState({ ...this.state, documentList: $documents });
  };

  const $sideBar = new SideBar({
    $target,
    initialState: {
      documentList: this.state.documentList,
    },
    addPage: AddPage,
    deletePage: DeletePage,
  });

  const $post = new Post({
    $target,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    $sideBar.setState({
      documentList: this.state.documentList,
    });
  };

  this.render = () => {
    GetPages();
  };

  this.render();
}
