import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Navbar extends React.Component {
  renderSquare(i) {
    return <h1> Hello {i} </h1>;
  }
  render() {
    return (
      <div>
        <h1> Hello </h1>
        {this.renderSquare(10)}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);
