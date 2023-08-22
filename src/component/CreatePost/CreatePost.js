import React from "react";
import "./CreatePost.css";
function CreatePost() {
  return (
    <div className="CreatePost">
      <div className="CreatePostWrapper">
        <div className="CreatePostTop">
          <i class="fa-regular fa-pen-to-square"></i>
          <p>Create Post</p>
        </div>
        <div className="CreatePostMiddle">
          <button>What'your mind?</button>
        </div>
        <div className="CreatePostBottom">
          <div className="video">
            <i class="fa-solid fa-video"></i>
            <p>Live Video</p>
          </div>
          <div className="image">
            <i class="fa-regular fa-image"></i>
            <p>Photo/Video</p>
          </div>
          <div className="Camera">
            <i class="fa-solid fa-camera"></i>
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
