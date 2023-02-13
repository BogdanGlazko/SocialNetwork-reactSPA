import React from "react";


const MyPost=(props:{name:string,age:number})=> {
    return (
        <div>
            <br/>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <br/>
        </div>
    );
}

export default MyPost;
