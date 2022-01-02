import { Button } from "@mui/material";
import { useContext } from "react";
import { CurrentUserContext } from "../context/CurrentUserProvider";

function CommentField(props) {
const userContext = useContext(CurrentUserContext);

  const classname = props.child?"comment-field-child-container":"comment-field-container"
  function handleSend(){
     console.log("Reply to the respective comment")
  }
  return (
    <div className={classname}>
      <img className="avatar" src={`${process.env.PUBLIC_URL}/${props.avatar}`} />

      <div className="textfield">
        <textarea type="text" />
      </div>
      <div className="send-btn">
        <Button
          onClick={handleSend}
          sx={{ backgroundColor: "hsl(238, 40%, 52%)" }}
          variant="contained"
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default CommentField;
