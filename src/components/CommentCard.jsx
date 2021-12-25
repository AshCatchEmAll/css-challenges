import amyAvatar from "../images/avatars/image-amyrobson.png";
import { Container } from "@mui/material";
function CommentCard(props) {
    const style = props.child === undefined?"comment-container":"comment-child-container";
  return (
    <>
      <Container sx={{"position":"relative"}}>
        <div  className={style}>
          <div className="like-dislike-container">
            <div className="like">+</div>
            <div className="count">12</div>
            <div className="dislike">-</div>
          </div>
          <div className="comment-content">
            <div className="comment-header">
              <div className="user-details">
                <img className="avatar" src={amyAvatar} />
                <div className="user-name">amyrobson</div>
              </div>
              <div className="time">1 month ago</div>
              <div className="reply">Reply</div>
            </div>
            <div className="comment-text">
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CommentCard;
