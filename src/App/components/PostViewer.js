import React from 'react';
import posed from 'react-pose';
import PostCard from './PostCard';


const PostViewerAnimator = posed.ul({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 75,
    transition: {
        y: { type: 'spring', stiffness: 500, damping: 15 },
        default: { duration: 2000 }
      }
  },
  closed: { y: '-100%', delay: 300 }
});

const PostCardAnimator = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class PostViewer extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 0);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    if(this.props.routerProps.data) {
        const { isOpen } = this.state;
        let data = this.props.routerProps.data.filter(x => x.type == this.props.postType);
        return (
          <PostViewerAnimator className="blog-content" pose={isOpen ? 'open' : 'closed'}>
            {data.length <= 0 ? "NO POSTS FOUND" : data.map(dat => (
                <PostCardAnimator className="item">
                    <PostCard {...this.props} postId={dat.id} image={dat.imgSrc} title={dat.title} desc="This is a sample code post about some unbelievable feat accompished in computer science"/>
                </PostCardAnimator>
            ))}
          </PostViewerAnimator>
        );
    } else return <div />

  }
}

export default PostViewer
