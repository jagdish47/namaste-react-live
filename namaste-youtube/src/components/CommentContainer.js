import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div>
      <img
        alt="user-image"
        className="w-8 h-8"
        src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
      />
      <div>
        <p>Name</p>
        <p>Comments</p>
      </div>
    </div>
  );
};


const commentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment}/>
            <div className="pl-5 border border-l-black">
                <Comment key={index} data={comment}/>
                <Comment key={index} data={comment}/>
                <Comment key={index} data={comment}/>
            </div>
        </div>
    ));
}



const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <Comment data={} />
    </div>
  );
};

export default CommentContainer;
