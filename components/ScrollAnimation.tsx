'use client';

import { ReactNode } from 'react';
import { Fade, Slide, Zoom, Grow } from '@mui/material';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationType = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'grow';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  type = 'fade',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  const getAnimation = () => {
    const timeout = { enter: duration, exit: duration };
    const style = { transitionDelay: `${delay}ms` };

    switch (type) {
      case 'fade':
        return (
          <Fade in={isVisible} timeout={timeout} style={style}>
            <div ref={ref}>{children}</div>
          </Fade>
        );
      case 'slide-up':
        return (
          <div ref={ref}>
            <Slide direction="up" in={isVisible} timeout={timeout} style={style}>
              <div>{children}</div>
            </Slide>
          </div>
        );
      case 'slide-left':
        return (
          <div ref={ref}>
            <Slide direction="left" in={isVisible} timeout={timeout} style={style}>
              <div>{children}</div>
            </Slide>
          </div>
        );
      case 'slide-right':
        return (
          <div ref={ref}>
            <Slide direction="right" in={isVisible} timeout={timeout} style={style}>
              <div>{children}</div>
            </Slide>
          </div>
        );
      case 'zoom':
        return (
          <Zoom in={isVisible} timeout={timeout} style={style}>
            <div ref={ref}>{children}</div>
          </Zoom>
        );
      case 'grow':
        return (
          <Grow in={isVisible} timeout={timeout} style={style}>
            <div ref={ref}>{children}</div>
          </Grow>
        );
      default:
        return <div ref={ref}>{children}</div>;
    }
  };

  return getAnimation();
}
