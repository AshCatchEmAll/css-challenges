import logo from "./logo.svg";
import "./App.css";
import amyAvatar from "./images/avatars/image-amyrobson.png";
import CommentCard from "./components/CommentCard";
import { Container } from "@mui/material";

function App() {
  return (
    <Container sx={{"width":"30vw"}}>
      <CommentCard />
      <CommentCard child/>
</Container>
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
