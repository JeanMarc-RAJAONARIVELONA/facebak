import React from "react";
import "./CreatePost.css";
function CreatePost() {
  return (
    <div className="CreatePost">
      <div className="CreatePostWrapper">
        <div className="CreatePostTop">
          <i className="fa-regular fa-pen-to-square"></i>
          <p>Create Post</p>
        </div>
        <div className="CreatePostMiddle">
          <textarea name="create post text" className={"CreatePostinput"} id="CreatePostinput" ></textarea>
        </div>
        <div className="CreatePostBottom">
          <div className="video">
            <i className="fa-solid fa-video"></i>
            <p>Live Video</p>
          </div>
          <div className="image">
            <i className="fa-regular fa-image"></i>
            <p>Photo/Video</p>
          </div>
          <div className="Camera">
            <i className="fa-solid fa-camera"></i>
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
