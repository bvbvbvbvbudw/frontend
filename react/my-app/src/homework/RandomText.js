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
    this.setState({ randomNum: Math.round(Math.random() * (this.state.arrText.length -1)) });
  }
  
  render() {
    console.log(this.state.randomNum)
    return (
      <div>Цитата дня: {this.state.arrText[this.state.randomNum]}</div>
    );
  }
}



export default RandomText
