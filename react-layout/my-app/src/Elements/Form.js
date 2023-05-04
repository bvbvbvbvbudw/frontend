import React from "react";
import Button from "./Button";

export default function Form() {

    return (<>

        <form class="subscribe" action="/" method="post">
            <input class="subscribe__input" type="email" name="name" placeholder="Your Email..." />
                <Button className={'subscribe__btn'} type={'submit'} text={'Subscribbe'}/>
        </form>

    </>)
}