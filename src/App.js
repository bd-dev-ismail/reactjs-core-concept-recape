import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}
function LoadComments(){
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return (
    <div>
      <h3>{comments.length}</h3>
      {
        comments.slice(0,10).map((comment)=> <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props){
  return (
    <div>
      <h3 >{props.email}</h3>
      <p>{props.body}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(55)
  const incraseCount = ()=> setCount(count + 1);
  const handalDecrase = ()=> setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{margin: '0 20px'}} onClick={incraseCount}>Incrase+</button>
      <button onClick={handalDecrase}>Decrase-</button>
    </div>
  );
}
export default App;
