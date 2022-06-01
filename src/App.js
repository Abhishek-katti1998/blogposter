import React, { useCallback, useEffect, useState, Component } from "react";
// import MyMapComponent from '../'
import ReactDOM from "react-dom";
import Car from "./Todos/Todo";
import Todos from "./Todos/Todo";
import "./App.css";
import MyMapComponent from "./Map/map";

const App = () => {
  return (
    <>
      {/* <SimpleMap /> */}
      <div className="map">
        <MyMapComponent />
      </div>

      {/* <form>
        <input onChange={debounceDecorator(debounce)("value")}></input>
      </form>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
    </>
  );
};

export default App;
