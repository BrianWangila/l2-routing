import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    let {username} = useParams()

    return(
        <div>
            <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
                User: {username}
            </center>
        </div>
    )

}

function Doubler(){

    let { num } = useParams()
    const double = num * 2

    return (
        <center style={{marginTop: 5 +'em', fontSize: 30 + 'px'}}>
            Double of {num} is {double}
        </center>
    )
}

export {Doubler}