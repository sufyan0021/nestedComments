import { Comment } from "../Comment";
import { useState } from "react";

export const CommentWrapper = ({ comments, indent = 0, handleReplySubmit }) => {
  return (
    <div style={{ "margin-left": `${indent}px` }}>
      {comments.map((comment, idx, commentArr) => {
        if (comment.replies) {
          return (
            <div key={comment.id}>
              <Comment
                comment={comment}
                handleReplySubmit={handleReplySubmit}
              />
              <CommentWrapper
                comments={comment.replies}
                indent={idx + 30}
                commentArr={commentArr}
                handleReplySubmit={handleReplySubmit}
              />
            </div>
          );
        }
        return (
          <Comment
            key={comment.id}
            comment={comment}
            handleReplySubmit={handleReplySubmit}
          />
        );
      })}
    </div>
  );
};
