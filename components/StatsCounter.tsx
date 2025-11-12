'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Fade } from '@mui/material';

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsCounter({ end, duration = 2000, suffix = '', label, delay = 0 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCount = () => {
        const now = Date.now();
        const remaining = endTime - now;
        const progress = Math.min((duration - remaining) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return (
    <Fade in={isVisible} timeout={1000}>
      <Box ref={ref} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="div" sx={{ fontWeight: 900, mb: 1 }}>
          {count}{suffix}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, opacity: 0.9 }}>
          {label}
        </Typography>
      </Box>
    </Fade>
  );
}
