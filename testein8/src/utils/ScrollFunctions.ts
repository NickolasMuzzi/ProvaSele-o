import {scroller} from 'react-scroll'

export const scrollToHome = () => {
    var header = document.getElementById("header")!
    scroller.scrollTo('first-section-container', {
      duration: 900,
      delay: 0,
      smooth: 'easeInOut',
    });
    header.style.backgroundColor = 'transparent'
  };

export   const scrollToRegister = () => {
    var header = document.getElementById("header")!
    scroller.scrollTo('register-section-container', {
      duration: 900,
      delay: 0,
      smooth: 'easeInOut',
    });
    header.style.backgroundColor = 'transparent'

  };

export const scrollToList = () => {
    var header = document.getElementById("header")!
    scroller.scrollTo('list-section', {
      duration: 900,
      delay: 0,
      smooth: 'easeInOut',
    });
    header.style.backgroundColor = 'transparent'

  };
export const scrollToAbout = () => {
    var header = document.getElementById("header")!

    scroller.scrollTo('about-me-container', {
      duration: 900,
      delay: 0,
      smooth: 'easeInOut',
    });
    header.style.backgroundColor = 'transparent'

  };