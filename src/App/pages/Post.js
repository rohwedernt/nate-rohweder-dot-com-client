import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PostAnimator from '../components/PostAnimator';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    whiteSpace: 'pre-line'
  }),
});

const postStyle = {
    fontFamily: 'monospace',
    fontSize: '32px',
    textAlign: 'center',
    webkitTextStroke: '1px #808080',
    color: 'white',
    paddingBottom: '16px'
}

const avatarStyle = {
    float: 'right',
    width: '300px',
    height: '300px',
    borderRadius: '5px',
    margin: '20px 20px 10px 10px'
}

const subtitleStyle = {
    fontWeight: 'bold'
}

function Post(props) {
  const title = props.postData.title;
  const img = props.postData.imgSrc;
  const content = props.postData.content;

  return(
    <PostAnimator>
      <Paper className={props.classes.root} elevation={4}>
        <div style={postStyle}>{title}</div>
        <Avatar style={avatarStyle} src={img} className={props.classes.avatar} />
        <Typography component="p">
          {/* <p style={subtitleStyle}>{aboutPost.welcome.title},</p> */}
            {content}
        </Typography>
      </Paper>
    </PostAnimator>
  );
}

export default withStyles(styles)(Post);
