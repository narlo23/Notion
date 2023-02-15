import Breadcrumb from "./Breadcrumb.js";
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

  const $postBody = new PostBody({
    $target: $post,
    initialState: {},
  });

  this.render = () => {};
  this.render();
}
