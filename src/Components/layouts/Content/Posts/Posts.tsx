import React from "react";
import MyPost from "./Post/MyPost";

type propsType={id:number, post:string, time:number}

const Posts = (props:{posts:[propsType]}) => {
    return (
        <div>
            <div>
                {props.posts.map(e => <MyPost key={e.id} name={e.post} age={e.time}/>
                )}
            </div>
        </div>
    );
}

export default Posts;
