'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fade } from '@mui/material';

const faqs = [
  {
    question: 'Hur lång tid tar ett typiskt grävprojekt?',
    answer: 'Tidsåtgången varierar beroende på projektets omfattning. En poolgrävning tar vanligtvis 1-2 dagar, medan en husgrund kan ta 3-5 dagar. Vi ger alltid en tidsuppskattning i vår offert.',
  },
  {
    question: 'Behöver jag tillstånd för grävarbeten?',
    answer: 'För de flesta grävarbeten på din egen tomt krävs inget särskilt tillstånd, men för större projekt som påverkar avlopp eller dränering kan bygglov eller anmälan behövas. Vi hjälper dig att navigera i tillståndsprocessen.',
  },
  {
    question: 'Vad ingår i priset?',
    answer: 'Våra offerter inkluderar all arbetskraft, maskinell utrustning, transport och bortforsling av överskottsmassa. Eventuella tillkommande kostnader specificeras alltid i förväg.',
  },
  {
    question: 'Arbetar ni året runt?',
    answer: 'Ja, vi utför grävarbeten året runt. Under vintern kan vissa projekt kräva extra förberedelser, men vi har utrustning och erfarenhet för arbete i alla väderförhållanden.',
  },
  {
    question: 'Hur får jag en offert?',
    answer: 'Kontakta oss via telefon eller fyll i vårt kontaktformulär. Vi kommer ut för en kostnadsfri platsbesök och lämnar en detaljerad offert inom 24 timmar.',
  },
];

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <Fade in timeout={300 + index * 100} key={index}>
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              mb: 2,
              '&:before': { display: 'none' },
              boxShadow: expanded === `panel${index}` ? 3 : 1,
              borderRadius: '8px !important',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography sx={{ fontWeight: expanded === `panel${index}` ? 700 : 600, fontSize: '1.1rem' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Fade>
      ))}
    </div>
  );
}
