import React from 'react';
import posed from 'react-pose';


const IconAnimator = posed.a({
    open: { y: 0, opacity: 1 },
    closed: { y: -10, opacity: 0 }
  });

function SocialIcon(props) {
    return (
        <IconAnimator target="_blank" href={props.target}>
            {props.children}
        </IconAnimator>
    )
}

export default SocialIcon;
