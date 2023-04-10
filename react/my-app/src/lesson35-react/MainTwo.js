import React from 'react';

class MainTwo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentValue: 0
        }
    }




    render(){

        const handlerClick = ()=>{
            this.setState({currentValue: this.state.currentValue+1});
        }

        return(
            <>
                <button onClick={handlerClick}>Click me for make +1</button>
                <div>{this.state.currentValue}</div>
            </>
        );
    }
}
export default MainTwo;