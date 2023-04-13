import React from 'react';

class Randomizer extends React.Component {
    render() {
        return (<>
            <button onClick={this.props.onClick} className='button-Magic' id='button'>Click me for activate magic ball</button>
        </>)
    }
}
class Display extends React.Component {
    render() {
        return (
            <>
                <div className='output-magic'><p className='answer' id='answer'>{this.props.displayText}</p></div>
            </>
        )
    }
}
class MagicBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNum: null,
            answers: ['It is certain', 'It is decidedly so ', 'Without a doubt', 'Yes — definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good',
                'Signs point to yes', 'Yes', 'Reply hazy, try again', ' Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concetrate and ask again',
                'Don`t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            randomNum: Math.round(Math.random() * (this.state.answers.length -1))
        })
    }
    render() {
        return (<>
            <Randomizer onClick={this.handleClick} />
            <Display displayText={this.state.answers[this.state.randomNum]} />
        </>)
    }

}

export default MagicBall;