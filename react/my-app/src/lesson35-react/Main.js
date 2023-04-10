import React from 'react';

class Main extends React.Component{

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
                <button onClick={handlerClick}>{this.state.currentValue}</button>

            </>
        );
    }
}
export default Main;