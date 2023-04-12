import React from 'react';


class RandomText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        arrText: ['Цитата 1', 'Цитата 2', 'Цитата 3', 'Цитата 4'],
        randomNum: null
      };
    }
  
    componentDidMount() {
      this.setState({ randomNum: Math.floor(Math.random() * this.state.arrText.length) });
    }
  
    render() {
      return (
        <div>{this.state.arrText[this.state.randomNum]}</div>
      );
    }
  }
  
  

export default RandomText
  