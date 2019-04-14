import React from 'react'
import Post from './Post';


function About(props) {
    return <Post postData={props.about} />
}

export default About;