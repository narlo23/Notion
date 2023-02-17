import Breadcrumb from "./Breadcrumb.js";
import Editor from "./Editor.js";
import PostBody from "./PostBody.js";

export default function Post({ $target, initialState }) {
  const $post = document.createElement("div");
  $post.className = "post";
  $target.appendChild($post);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = { ...this.state, nextState };
    this.render();
  };

  const $breadCrumb = new Breadcrumb({
    $target: $post,
    initialState: [
      {
        id: 1,
        name: "root",
      },
      {
        id: 2,
        name: "child1",
      },
    ],
  });

  const $editor = new Editor({
    $target: $post,
    initialState: {},
  });

  /*
  const $postbody = new PostBody({
    $target: $post,
  });
*/
  this.render = () => {};
  this.render();
}
