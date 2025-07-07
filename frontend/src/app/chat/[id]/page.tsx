import React from "react";

export default function chat({params}:{params:{id:string}}) {
    console.log("the group id is",params.id);
    return(
        <div>
            <h1>hello i am chat</h1>
        </div>
    )
}