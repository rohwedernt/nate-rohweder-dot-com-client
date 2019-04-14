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



class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    fetch('/api/getPost')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { classes } = this.props;
    return (
      <PostAnimator>
        <Paper className={classes.root} elevation={4}>
          <div style={postStyle}>{aboutPost.title}</div>
          <Avatar style={avatarStyle} src={aboutPost.imgPath} className={classes.avatar} />
          <Typography component="p">
            <p style={subtitleStyle}>{aboutPost.welcome.title},</p>
              {aboutPost.welcome.content}
                <a href="www.google.com">here.</a>
            <p style={subtitleStyle}>{aboutPost.work.title},</p>
              {aboutPost.work.content}
            <p style={subtitleStyle}>{aboutPost.music.title},</p>
              {aboutPost.music.content}
          </Typography>
        </Paper>
      </PostAnimator>
    );
  }
}

export default withStyles(styles)(Post);
