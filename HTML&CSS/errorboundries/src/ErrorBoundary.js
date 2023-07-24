import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false , error: null, errorInfo:null};
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });   
    }
  
    render() {
      if (this.state.hasError) {
        return(
            <div>
                 <h1>Something went wrong.</h1>
                 <div>
                  <p> Details
                    <br></br>Error: I crashed!</p>
                 {this.state.error && <div>{this.state.error.toString()}</div>} </ div>
                 <div>
                 {this.state.errorInfo &&<div>{this.state.errorInfo.componentStack}</div>}</div>
      </div>);
    }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;