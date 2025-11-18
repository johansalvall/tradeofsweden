'use client';

import { Card, CardContent, Typography, CardActions, Button, Zoom } from '@mui/material';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode | string;
  index: number;
}

export default function AnimatedServiceCard({ title, description, icon, index }: AnimatedServiceCardProps) {
  const [elevated, setElevated] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const isReactNode = typeof icon !== 'string';

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
          transform: elevated ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: elevated ? 12 : 3,
          background: elevated 
            ? 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)' 
            : '#ffffff',
          border: elevated ? '2px solid #d97706' : '2px solid #e5e7eb',
          borderRadius: '8px',
          '&:hover': {
            borderColor: '#d97706',
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 4 }}>
          <div style={{ 
            fontSize: isReactNode ? '0' : '3rem', 
            marginBottom: '16px',
            color: elevated ? '#d97706' : '#334155',
            transition: 'color 0.3s ease',
            height: isReactNode ? '64px' : 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {isReactNode ? (
              <div style={{ width: '64px', height: '64px', color: elevated ? '#d97706' : '#334155' }}>
                {icon}
              </div>
            ) : (
              icon
            )}
          </div>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h3" 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              color: '#1e293b',
              fontSize: '1.5rem',
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.8,
              color: '#475569',
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            size="large"
            variant={elevated ? 'contained' : 'outlined'}
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{
              bgcolor: elevated ? '#d97706' : 'transparent',
              color: elevated ? '#ffffff' : '#d97706',
              borderColor: '#d97706',
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: '4px',
              borderWidth: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              '&:hover': {
                bgcolor: elevated ? '#b45309' : '#fef3c7',
                borderColor: '#b45309',
                borderWidth: '2px',
              },
            }}
          >
            Läs mer
          </Button>
        </CardActions>
      </Card>
    </Zoom>
  );
}
