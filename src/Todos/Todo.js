import React, { memo, useCallback, useMemo } from "react";
import { useEffect, useState } from "react";

// const Todos = ({ todos }) => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((e) => e.json())
//       .then((e) => {
//         // console.log(e);
//         setData(e);
//       });
//     return function () {
//       console.log("component unmounted");
//     };
//   }, []);
//   console.log(data);
//   return (
//     <table>
//       {data.map((e, index) => {
//         return <tr key={index}>{e.title}</tr>;
//       })}
//     </table>
//   );
// };
// class Todos extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     return <h3>{this.props.name}</h3>;
//   }
// }
// export default Todos;
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favoritecolor: "red" };
//   }
//   // shouldComponentUpdate() {
//   //   return false;
//   // }
//   changeColor = () => {
//     this.setState({ favoritecolor: "blue" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>
//           Change color
//         </button>
//       </div>
//     );
//   }
// }
// const Car = React.memo(function (props) {
//   function multiply(x, y) {
//     return x * y;
//   }
//   const cachedValue = useMemo(
//     () => multiply(props.x, props.y),
//     [props.x, props.y]
//   );
//   function incrChild() {
//     console.log("clicked");
//   }
//   console.log("renderd");
//   return (
//     <div>
//       <h1>Car is {props.name}</h1>
//       <h1 onClick={multiply}>res is {cachedValue}</h1>
//       <button onClick={incrChild}>click</button>
//     </div>
//   );
// });
const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default React.memo(Todos);
