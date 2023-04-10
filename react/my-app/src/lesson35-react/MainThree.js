import React from 'react';

class Button extends React.Component {
    render() {
        const handlerClickMain = () => {
            this.props.onClickAct(this.props.btnText)
        }
        return (
            <>
                <button onClick={handlerClickMain}>+ {this.props.btnText}</button>
            </>
        );
    }
}
// export default Button;

class Display extends React.Component {
    render() {
        return (
            <>
                <div>{this.props.displayText}</div>
            </>
        )
    }
}

class MainThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crntValue: 0
        }
    }
    render() {
        const oneStep = 2;
        const startClick = (intValue) => {
            this.setState({
                crntValue: this.state.crntValue + intValue
            });
        }
        return (
            <>
                <Button btnText={oneStep} onClickAct={startClick} />
                <Display displayText={this.state.crntValue} />
            </>
        );
    }
}
export default MainThree;

// class MainThree extends React.Component{

//     constructor(props){
//         super(props);


//     }




//     render(){


//         return(
//             <>

//             </>
//         );
//     }
// }
// export default MainThree;