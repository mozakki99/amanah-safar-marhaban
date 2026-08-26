'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AuthorityBar from '@/components/AuthorityBar';
import PainPointsSection from '@/components/PainPointsSection';
import ProgramSpotlight from '@/components/ProgramSpotlight';
import CostCalculator from '@/components/CostCalculator';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import BookingFormModal from '@/components/BookingFormModal';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | undefined>(undefined);

  const handleOpenForm = (topic?: string) => {
    setSelectedTopic(topic);
    setIsFormOpen(true);
  };

  return (
    <>
      <HeroSection onOpenBookingForm={handleOpenForm} />
      <AuthorityBar />
      <PainPointsSection />
      <ProgramSpotlight onOpenBookingForm={handleOpenForm} />
      <CostCalculator onOpenBookingFormWithCalc={handleOpenForm} />
      <TestimonialsSection />
      <FaqSection />
      <WhatsAppFloat onOpenBookingForm={() => handleOpenForm('Konsultasi Umrah & Haji')} />

      {/* Global WhatsApp Lead Form Modal */}
      <BookingFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        packageName={selectedTopic}
      />
    </>
  );
}
