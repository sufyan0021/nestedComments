import { useState } from "react";

export const Comment = ({ comment, handleReplySubmit }) => {
  const [reply, setNewReply] = useState({});
  const [replyToggle, setReplyToggle] = useState(false);

  const handleReplyChange = (reply) => {
    setNewReply(reply);
  };

  const handleReplyToggle = () => {
    setReplyToggle((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div style={{ maxHeight: "160px" }}>
      {comment.text}
      <div style={{ display: "flex", gap: "10px" }}>
        <button>Like - {comment.likes}</button>
        <button>Dislike</button>
        <button onClick={handleReplyToggle}>
          Reply - {comment?.replies?.length}
        </button>
      </div>
      {replyToggle && (
        <>
          <textarea
            value={reply.text}
            onChange={(e) => handleReplyChange(e.target.value)}
          />
          <button
            onClick={() => {
              console.log("The handle Reply Sumbit", handleReplySubmit);
              handleReplySubmit(comment.id, reply);
              setReplyToggle(false);
            }}
          >
            Submit Reply{" "}
          </button>
        </>
      )}
    </div>
  );
};
