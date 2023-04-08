import React from "react";

class Test extends React.Component{
    render(){

        return(
         <>
         это класс компонент
         </>   
        )
    }
}

function Mycompnonent(props){
    console.log(props)
    return (
        <>
            <Test/>
            <button style={{color: props.color}} >{props.text}</button>
        </>
    )
}


export default Mycompnonent;