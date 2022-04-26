import React from "react";

const Post = ({ id, posts, history }) => {
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  const handleSave = () => {
    history.replace("/posts");
  };
  const post = getPostById(id);
  return (
    <>
      <h1>{post ? post.label : `Post with id:${id} not found`}</h1>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default Post;
