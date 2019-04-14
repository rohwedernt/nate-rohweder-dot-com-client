import React from 'react';

function PostLog(props) {
    const { data } = props
    return(
        <ul>
            {data.length <= 0
                ? "NO POSTS FOUND"
                : data.map(dat => (
                    <li style={{ padding: "10px" }} key={data.message}>
                        <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                        <span style={{ color: "gray" }}> data: </span>
                        {dat.title + dat.imgSrc + dat.content} 
                    </li>
            ))}
        </ul>
    );
}

export default PostLog;