import React,{useState} from 'react';
import cat from './img/img-cat.png';


export default function ComponentTwo () {
    // var top = 20;
    // var left = 1220;
    // var bottom = 20;
    // var right = 130;

    const [top , setTop] = useState((Math.round(Math.random() * 100 )));
    const [left , setLeft] = useState((Math.round(Math.random() * 200 )))
    const [bottom , setBottom] = useState((Math.round(Math.random() * 100 )))
    const [right , setRight] = useState((Math.round(Math.random() * 200 )))



    return (<>
    
    <p>2 - виводиться картинка в різній позиції на екрані (вверху в низу ...)</p>
    <img  src={cat} style={{marginTop: top, marginBottom: bottom, marginRight:right,marginLeft: left}}/>
    
    </>)
}