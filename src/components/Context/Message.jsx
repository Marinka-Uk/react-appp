import React, { useContext } from "react";
import  { ContextMessage, useFirst } from './App'

export const Message = () => {
    const abc = useFirst()

    return <>
    {abc.show && <p>Message</p>}
    </>
}