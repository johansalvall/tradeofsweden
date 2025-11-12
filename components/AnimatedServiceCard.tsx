'use client';

import { Card, CardContent, CardMedia, Typography, CardActions, Button, Zoom } from '@mui/material';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function AnimatedServiceCard({ title, description, icon, index }: AnimatedServiceCardProps) {
  const [elevated, setElevated] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <Zoom in={isVisible} timeout={300 + index * 100}>
      <Card
        ref={ref}
        onMouseEnter={() => setElevated(true)}
        onMouseLeave={() => setElevated(false)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease-in-out',
          transform: elevated ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: elevated ? 8 : 2,
          '&:hover': {
            borderColor: 'primary.main',
          },
          border: '2px solid transparent',
        }}
      >
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h2" component="div" sx={{ fontSize: '3rem', mb: 2 }}>
            {icon}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            size="medium"
            variant={elevated ? 'contained' : 'outlined'}
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Läs mer
          </Button>
        </CardActions>
      </Card>
    </Zoom>
  );
}
