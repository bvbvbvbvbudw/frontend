import React, {useState, useEffect} from 'react';


export default function Effect () {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const timeAction = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    }

    useEffect(()=>{
        let handlerTimer = setInterval(timeAction, 1000);

        return() => {
            clearInterval(handlerTimer);
        }
    },[]);


    return(<>
    
    {currentTime}
    
    </>)
}