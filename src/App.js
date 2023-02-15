import Post from "./Post/Post.js";
import SideBar from "./SideBar/SideBar.js";

export default function App({ $target }) {
  const $sideBar = new SideBar({
    $target,
  });

  const $post = new Post({
    $target,
  });

  this.route = () => {};
  this.route();
}
