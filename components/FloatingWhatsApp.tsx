import React from 'react';
import { WhatsAppIcon } from './icons';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "917036929247";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce-subtle group"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;

