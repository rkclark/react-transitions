import React from 'react';
import Transition from 'react-transition-group/Transition';

export default function FadeAndSlideTransition({children, duration, in: inProp}) {

  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity, transform',
  }

  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: 'translateY(-10%)',
    },
    entered: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    exiting: {
      opacity: 0,
      transform: 'translateY(-10%)',
    }
  }

  const onEnter = () => {
    console.log('ON ENTER');
  }
  const onEntering = () => {
    console.log('ON ENTERING');
  }
  const onEntered = () => {
    console.log('ON ENTERED');
  }

  const onExiting = () => {
    console.log('ON EXITING');
  }

  const onExited = () => {
    console.log('ON EXITED');
  }


  return (
    <Transition in={inProp} timeout={duration} onEnter={onEnter} onEntering={onEntering} onEntered={onEntered} onExiting={onExiting} onExited={onExited}>
      {
        (status) => {
          if(status === 'exited') {
            return null;
          }
          const currentStyles = transitionStyles[status];
          return React.cloneElement(children, {
            style: {...defaultStyle, ...currentStyles}
          })
        }
      }
    </Transition> 
  )
}