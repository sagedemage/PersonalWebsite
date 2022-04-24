import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Navbar extends React.Component {
  para(topic, text) {
    return (
	    <div>
	    	<h2> {topic} </h2>
	    	<p> {text} </p>
	    </div>
    );
  }
  render() {
    return (
      <div>
        <h1> Hello </h1>
        {this.para("topic1", "description1")}
	{this.para("topic2", "description2")}
	{this.para("topic3", "description3")}
	{this.para("topic4", "description4")}
	{this.para("topic5", "description5")}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);
