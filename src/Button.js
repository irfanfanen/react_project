import React, { useState } from 'react';

const Button = ({ text }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <button  onClick={handleClick}> {text } {count }</button>
    )
}

const Button2 = ({ text }) => {
    return (
        <button >Tombol 2 { text }</button>
    )
}

export {Button, Button2};
