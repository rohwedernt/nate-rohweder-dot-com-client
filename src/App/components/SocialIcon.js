import React from 'react';
import posed from 'react-pose';


const IconAnimator = posed.div({
    open: { y: 0, opacity: 1 },
    closed: { y: -10, opacity: 0 }
  });

function SocialIcon(props) {
    return (
        <div>
            <a target="_blank" href={props.target}>
                <IconAnimator>
                    {props.children}
                </IconAnimator>
            </a>
        </div>
    )
}

export default SocialIcon;
