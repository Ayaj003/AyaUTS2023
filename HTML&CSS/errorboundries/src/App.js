import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";
import "./App.css";

class App extends Component{
  render () {
    return (
    <div className="body">
      <h2>Error Boundary Sample</h2>
      <hr></hr>
      <ErrorBoundary>
      <p>These two are inside the same error boundary. if one crashes, the error boundary will replace both of them.</p>
       <BuggyCounter />
       <BuggyCounter />
      </ErrorBoundary>
      <hr></hr>
      <p>These two are inside the same error boundary. if one crashes, the error boundary will replace both of them.</p>
      <ErrorBoundary>
       <BuggyCounter />
       </ErrorBoundary>
       <ErrorBoundary>
       <BuggyCounter />
       </ErrorBoundary>
    </div>
    )
  }
}

export default App;