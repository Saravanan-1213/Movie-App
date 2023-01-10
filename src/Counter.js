import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export function Counter1() {
  let [like, setLike,] = useState(0);
  let [dislike, setDisLike,] = useState(0);


  // conditional styling 
const likeStyles={
color: like >= 10 ?"green" : "deepskyblue"
}

const disLikeStyles={
color: dislike >= 10 ?"red" : "deepskyblue"
}



  return <div>
    {/* Conditional Rendering*/}
    {like - dislike >= 10 ? <h3> BLOCK BUSTER 🔥🔥 </h3> : null}
    <button style={likeStyles}
      onClick={() => setLike(like + 1)}>👍 {like}</button>
    <button style={disLikeStyles}
      onClick={() => setDisLike(dislike + 1)}>👎 {dislike}</button>
  </div>;
}
export function Counter() {
  let [like, setLike,] = useState(0);
  let [dislike, setDisLike,] = useState(0);

  const increamentLike= () => setLike(like + 1)
  const increamentDisLike= () => setDisLike(dislike + 1)


  return <div>
    {/* Conditional Rendering*/}
    
<IconButton onClick={increamentLike} aria-label="like" color="primary">
    <Badge badgeContent={like} color="primary">
    👍
    </Badge>
</IconButton>



<IconButton onClick={increamentDisLike} aria-label="dislike" color="error">
<Badge badgeContent={dislike} color="error">
👎
    </Badge>
</IconButton>

  </div>;
}
