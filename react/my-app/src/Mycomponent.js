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

    // let arr = [2,4,1,5,70];
    // let [,,, ... a] = arr;

    // console.log(arr)
    // console.log(a)


    let obj = {name: 'ffffff',
                age: 18}
    let {name,age} = obj;


    // arr[1];
    // d ;

    // let {text} = props

    return (
        <>
            <Test/> 
            {/* <button style={{color:color}} >{text}</button> */}
        </>
    )
}


export default Mycompnonent;

// Mycompnonent.defaultProps = {color: 'black',text: 'default text'}