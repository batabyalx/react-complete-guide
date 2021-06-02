import React, { Component } from "react";
import "./App.css";
import Char from "./Char/Char";
import Validation from "./Validation/Validation";

class App extends Component {
  state = {
    inputText: "",
  };

  inputChangedHandler = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  deleteCharHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({inputText: updatedText});
  };

  render() {
    const chars = this.state.inputText.split("").map((t, index) => {
      return <Char click={() => this.deleteCharHandler(index)} character={t} key={index} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.inputText}
        />
        <p>{this.state.inputText}</p>
        <p>{this.state.inputText.length}</p>
        <Validation inputLength={this.state.inputText.length} />
        {chars}
      </div>
    );
  }
}

export default App;
