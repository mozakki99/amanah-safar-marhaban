'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import BookingFormModal from './BookingFormModal';

interface WhatsAppFloatProps {
  onOpenBookingForm?: () => void;
}

export default function WhatsAppFloat({ onOpenBookingForm }: WhatsAppFloatProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    if (onOpenBookingForm) {
      onOpenBookingForm();
    } else {
      setIsFormOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group focus:outline-none"
        aria-label="Konsultasi WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></span>
        </div>

        <span className="hidden sm:inline-block font-bold text-sm">
          Konsultasi WA Fast Response
        </span>
      </button>

      {/* Backup Form Modal if used globally without handler */}
      <BookingFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        defaultTopic="Konsultasi WhatsApp Floating Button"
      />
    </>
  );
}
