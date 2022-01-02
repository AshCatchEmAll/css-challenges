import { Button, Container, popoverClasses } from "@mui/material";
import { AccessAlarm, Reply, Delete, Edit, Cancel } from "@mui/icons-material";
import { Component, useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import CommentField from "./CommentField";
import { useState } from "react";

function CommentCard(props) {
  const userContext = useContext(CurrentUserContext);
  const [reply, setReply] = useState(false);
  const style =
    props.child === undefined ? "comment-container" : "comment-child-container";

  function wrapper(child) {
    if (props.child) {
      return <div style={{ position: "relative" }}>{child}</div>;
    } else {
      return child;
    }
  }
  function handleReply(status) {
    console.log("Reply is clicked", userContext.currentUser);
    setReply(status);
  }
  return (
    <>
      {wrapper(
        <div className={style}>
          <div className="like-dislike-container">
            <div className="like">+</div>
            <div className="count">{props.count}</div>
            <div className="dislike">―</div>
          </div>
          <div className="comment-content">
            <div className="comment-header">
              <div className="user-details">
                <img
                  className="avatar"
                  src={`${process.env.PUBLIC_URL}/${props.avatar}`}
                />
                <div className="user-name">{props.name}</div>
              </div>
              <div className="time">{props.time}</div>

              {props.isCurrentUser === true ? (
                <div className="activeUser-btn-container">
                  <div className="delete-btn">
                    <Button
                      sx={{ fontWeight: "bold" }}
                      size="small"
                      color="warning"
                      startIcon={<Delete fontSize="small" color="warning" />}
                    >
                      Delete
                    </Button>
                  </div>

                  <div className="edit-btn">
                    <Button
                      size="small"
                      sx={{ color: "hsl(238, 40%, 52%)", fontWeight: "bold" }}
                      startIcon={<Edit fontSize="small" />}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              ) : reply === false ? (
                <div className="reply" onClick={handleReply.bind(null, true)}>
                  <Reply fontSize="small" />
                  Reply
                </div>
              ) : (
                <div className="reply" onClick={handleReply.bind(null, false)}>
                  <Cancel fontSize="small" />
                  Cancel
                </div>
              )}
            </div>
            <div className="comment-text">{props.content}</div>
          </div>
        </div>
      )}
      {reply === true
        ? wrapper(
            <CommentField
              child
              avatar={userContext.currentUser["image"]["png"]}
            />
          )
        : null}
    </>
  );
}

export default CommentCard;
