// filename: Typing.js
// React version: "^16.12.0"
import React from "react";
import Typed from 'typed.js'
// Import the desired words
class Typing4 extends React.Component {
  componentDidMount() {
    const options = {
        strings: ['Well... if ritus out of office then...', 'Im aWAY too 💔 .. cant make it..miss you', 'https://www.youtube.com/watch?v=0i4gZ9IE2CI'],
        typeSpeed: 100
      };
      
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
      <div class="chat">
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
        </div>
      </>
    );
  }
}
export default Typing4;