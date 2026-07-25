import { createContext, useContext, useState, ReactNode } from 'react';

interface WhatsAppModalContextType {
  isOpen: boolean;
  openModal: (initialMedicine?: string) => void;
  closeModal: () => void;
  prefilledMedicine: string;
}

const WhatsAppModalContext = createContext<WhatsAppModalContextType | undefined>(undefined);

export function WhatsAppModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const openModal = (initialMedicine?: string) => {
    if (initialMedicine) {
      setPrefilledMedicine(initialMedicine);
    } else {
      setPrefilledMedicine('');
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPrefilledMedicine('');
  };

  return (
    <WhatsAppModalContext.Provider value={{ isOpen, openModal, closeModal, prefilledMedicine }}>
      {children}
    </WhatsAppModalContext.Provider>
  );
}

export function useWhatsAppModal() {
  const context = useContext(WhatsAppModalContext);
  if (context === undefined) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppModalProvider');
  }
  return context;
}
