'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MeetingInfo } from '@/components/meeting-info';
import { CalendarSelector } from '@/components/calendar-selector';
import { BookingConfirmation } from '@/components/booking-confirmation';

export default function BookCallPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const handleDateSelected = (date: Date) => {
    setSelectedDate(date);
  };
  
  const handleTimeSelected = (time: string) => {
    setSelectedTime(time);
    setShowConfirmation(true);
  };
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 mx-auto max-w-6xl min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="relative flex items-center justify-center py-4 mb-16">
        <div className="flex items-center justify-center p-3 bg-white rounded-full shadow-lg">
          <div className="flex -space-x-3 overflow-hidden">
            <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold">
              K
            </div>
          </div>
          <span className="ml-5 text-gray-600 font-medium">54+ startups & founders chose skale.solutions</span>
        </div>
      </div>

      <h1 className="mb-10 text-7xl font-bold text-center text-gray-700">Book a 15-min call</h1>
      
      <p className="mb-16 text-xl text-center text-gray-600">
        Please select the time that fits you or just text me in {' '}
        <Link href="https://t.me/markknd" className="text-blue-500 underline font-medium">Telegram</Link>
        {' / '}
        <Link href="#" className="text-green-500 underline font-medium">WhatsApp</Link>
      </p>

      <div className="flex flex-col md:flex-row items-stretch p-0 bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-4xl border border-gray-100">
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
          <MeetingInfo 
            title="Skale Solutions Intro"
            organization="Skale.solutions"
            duration="30 mins"
            details={[
              "Share formal intro&apos;s",
              "Share our work & process",
              "Learn about your project & business goals"
            ]}
          />
        </div>

        <div className="w-full md:w-2/3">
          {showConfirmation ? (
            <BookingConfirmation 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              meetingTitle="Skale Solutions Intro"
            />
          ) : (
            <CalendarSelector 
              onDateSelected={handleDateSelected}
              onTimeSelected={handleTimeSelected}
            />
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center px-5 py-2.5 text-sm bg-orange-500 rounded-lg text-white font-medium">
          <span className="mr-2">🚨</span>
          <span>2 spots available</span>
        </div>
      </div>
    </div>
  );
} 