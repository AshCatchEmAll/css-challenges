import logo from "./logo.svg";
import "./App.css";


import CommentCard from "./components/CommentCard";
import { Container } from "@mui/material";
import CommentField from "./components/CommentField";
import data from "./data.json";
import CurrentUserProvider from "./context/CurrentUserProvider";
function App() {
  
  const comments = data["comments"];
  const currentUser = data["currentUser"]["username"]
  return (
    <CurrentUserProvider>
    <div className="outer-div">
      {comments.map((comment, index) => {
        console.log(comment)
        return (
          <>
          <CommentCard
            time={comment["createdAt"]}
            avatar={comment["user"]["image"]["png"]}
            count={comment["score"]}
            name={comment["user"]["username"]}
            key={index}
            isCurrentUser={comment["user"]["username"]===currentUser}
            content={comment["content"]}
          />
          {
            comment["replies"].map((reply,i)=>{
              return (
                <CommentCard
                child
                time={reply["createdAt"]}
                avatar={reply["user"]["image"]["png"]}
                count={reply["score"]}
                name={reply["user"]["username"]}
                key={i}
                isCurrentUser={reply["user"]["username"]===currentUser}
                content={reply["content"]}
              />
              );
            })
          }
          </>
        );
      })}
     
      <CommentField avatar={"images/avatars/image-juliusomo.png"} />
    </div>
    </CurrentUserProvider>
  );
}

export default App;
//  {/* </div>
//   <div class="attribution">
//     Challenge by
//     <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
//       >Frontend Mentor</a
//     >. Coded by <a href="#">Aashish Vichare</a>.
//   </div> */}
