import React from 'react';
import posed from 'react-pose';
import {Github, Facebook, LinkedIn, Twitter, Instagram} from '../icons/icons';
import SocialIcon from '../components/SocialIcon';


const HomeContentAnimator = posed.div({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 150,
    transition: {
        y: { type: 'spring', stiffness: 300, damping: 100 },
        default: { duration: 1000 }
      }
  },
  closed: { y: '-10%', delay: 300 }
});

class Home extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 0);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
        <HomeContentAnimator className="blog-content" pose={isOpen ? 'open' : 'closed'}>
          <SocialIcon target='https://github.com/rohwedernt'>
            <Github />
         </SocialIcon>
          <SocialIcon target='https://www.linkedin.com/in/nate-rohweder-8b1026121/'>
            <LinkedIn />
          </SocialIcon>
          <SocialIcon target='https://twitter.com/nrohweder1'>
            <Twitter />
          </SocialIcon>
          <SocialIcon target='https://www.facebook.com/rohwedernt'>
            <Facebook />
         </SocialIcon>
          <SocialIcon target='https://www.instagram.com/naterohweder/'>
            <Instagram />
          </SocialIcon>
       </HomeContentAnimator>
    );
  }
}

export default Home