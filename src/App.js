import { useState } from "react";
import { mockData } from "./mockData";
import { CommentWrapper } from "./components/CommentWrapper";

export default function App() {
  const [mockStateData, setMockStateData] = useState(mockData);
  const [newComment, setNewComment] = useState("");

  const handleStateUpdate = (comment) => {
    console.log("The comment", comment);
    const newComment = {
      id: Math.random(),
      text: comment,
      likes: 0,
      liked: 0,
      replies: [],
    };
    setNewComment({ ...newComment, text: comment });
  };

  const handleFindAndUpdate = (commentId, reply, comments) => {
    const newComments = comments?.map((comment) => {
      if (comment.id === commentId) {
        const newReplyComment = {
          id: Math.random(),
          text: reply,
          likes: 0,
          liked: false,
          replies: [],
        };
        comment.replies.unshift(newReplyComment);
      }
      let receivedMassagedComment = [];
      if (comment.replies) {
        receivedMassagedComment = handleFindAndUpdate(
          commentId,
          reply,
          comment.replies
        );
      }
      return { ...comment, replies: receivedMassagedComment };
    });
    return newComments;
  };

  const handleReplySubmit = (commentId, reply) => {
    const finalCommentsList = handleFindAndUpdate(commentId, reply, mockData);
    setMockStateData(finalCommentsList);
    console.log("The finalCOmmentsList", finalCommentsList);
  };

  return (
    <div className="App">
      <textarea
        onChange={(e) => {
          handleStateUpdate(e.target.value);
        }}
        value={newComment.text}
      />
      <button
        onClick={() => {
          setMockStateData((prevComments) => {
            const updatedComments = [newComment, ...prevComments];
            return updatedComments;
          });
        }}
      >
        Submit Comment
      </button>
      <CommentWrapper
        comments={mockStateData}
        handleStateUpdate={handleStateUpdate}
        handleReplySubmit={handleReplySubmit}
      />
    </div>
  );
}

