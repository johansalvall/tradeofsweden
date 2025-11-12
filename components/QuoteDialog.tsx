'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Slide,
  Alert,
  Snackbar,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface QuoteDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function QuoteDialog({ open, onClose }: QuoteDialogProps) {
  const [snackbar, setSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const services = [
    'Gräv & Markarbete',
    'Avlopp & Infiltration',
    'Dränering',
    'Poolgrävning',
    'Husgrund & Väggarbete',
    'Altan & Trädäck',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbar(true);
    setTimeout(() => {
      onClose();
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Begär Offert
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Namn"
              type="text"
              fullWidth
              required
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              name="phone"
              label="Telefon"
              type="tel"
              fullWidth
              required
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              name="email"
              label="E-post"
              type="email"
              fullWidth
              required
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              name="service"
              label="Typ av tjänst"
              select
              fullWidth
              required
              variant="outlined"
              value={formData.service}
              onChange={handleChange}
              sx={{ mb: 2 }}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="dense"
              name="message"
              label="Meddelande"
              type="text"
              fullWidth
              required
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={onClose} color="inherit">
              Avbryt
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Skicka förfrågan
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Tack för din förfrågan! Vi återkommer inom 24 timmar.
        </Alert>
      </Snackbar>
    </>
  );
}
