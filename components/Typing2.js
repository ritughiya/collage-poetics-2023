// filename: Typing.js
// React version: "^16.12.0"
import React from "react";
import Typed from 'typed.js'
// Import the desired words
class Typing2 extends React.Component {
  componentDidMount() {
    const options = {
        strings: ['how was class last week? I wanted to go but I couldn’t make it..🚑'],
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
export default Typing2;