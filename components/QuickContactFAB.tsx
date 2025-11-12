'use client';

import { useState } from 'react';
import Fab from '@mui/material/Fab';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function QuickContactFAB() {
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'info' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAction = (action: string) => {
    switch (action) {
      case 'phone':
        window.location.href = 'tel:0701234567';
        setSnackbar({ open: true, message: 'Ringer upp...', severity: 'info' });
        break;
      case 'email':
        window.location.href = 'mailto:info@tradeofsweden.se';
        setSnackbar({ open: true, message: 'Öppnar e-post...', severity: 'info' });
        break;
      case 'contact':
        document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
        setSnackbar({ open: true, message: 'Scrollar till kontaktformulär...', severity: 'success' });
        break;
    }
    handleClose();
  };

  const actions = [
    { icon: <PhoneIcon />, name: 'Ring oss', action: 'phone' },
    { icon: <EmailIcon />, name: 'Skicka e-post', action: 'email' },
    { icon: <QuestionAnswerIcon />, name: 'Kontaktformulär', action: 'contact' },
  ];

  return (
    <>
      <SpeedDial
        ariaLabel="Snabbkontakt"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleAction(action.action)}
          />
        ))}
      </SpeedDial>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
