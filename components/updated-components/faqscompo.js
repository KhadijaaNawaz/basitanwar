
import FaqList from '@/components/faqs/FaqList';


export const FAQ_ITEMS = [
    { 
        id: 1,
        question: 'What services does Basatanwer Tech offer?',
        answer: "Basatanwer Tech Services is a leading provider of technical services in Dubai. We specialize in Interior & Exterior paint contracting, Landscaping, Swimming pool maintenance, Electrical, Plumbing, and AC maintenance. Whether it's a quick repair or a full-scale renovation, our experienced professionals are here to assist you."
      },
  
      { 
        id: 2,
        question: 'How can I request a service from Basatanwer Tech?',
        answer: "You can easily request a service by visiting our website at https://basatanwertech.com/ and navigating to the 'Services' page. There, you can find details about each service we offer and a contact form to submit your request. Alternatively, you can call us directly at +971 52 405 2485 to speak with our customer service team."
      },
      { 
        id: 3,
        question: 'Are your professionals experienced and qualified?',
        answer: " Yes, our professionals at Basatanwer Tech are highly experienced and qualified in their respective fields. We prioritize hiring skilled technicians with a strong track record to ensure that our clients receive top-notch services."
      },
      { 
        id: 4,
        question: 'What areas in Dubai do you serve?',
        answer: "Basatanwer Tech Services covers various areas in Dubai. For specific information about our service areas, please contact us directly via phone or the contact form on our website."
      },
      { 
        id: 5,
        question: 'How do you handle emergency repairs?',
        answer: "We understand that emergencies can happen. For urgent repairs, please call our emergency hotline at +971 52 405 2485. Our team will prioritize your request and dispatch professionals to address the issue promptly."
      }
  ];

// the same numbered, sliding list as the FAQ page (the old one measured one shared ref, so heights were wrong)
const Faq = () => <FaqList items={FAQ_ITEMS} idPrefix="home-faq" />;

export default Faq;
