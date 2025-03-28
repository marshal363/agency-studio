import { useState } from 'react';
import { Button } from './ui/button';

interface BookingConfirmationProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  meetingTitle: string;
}

export function BookingConfirmation({
  selectedDate,
  selectedTime,
  meetingTitle
}: BookingConfirmationProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatDate = (date: Date | null) => {
    if (!date) return 'No date selected';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 text-green-500 flex items-center justify-center rounded-full bg-green-100 shadow-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">Booking Confirmed!</h3>
        <p className="text-gray-600 mb-8">
          We&apos;ve sent an email confirmation to <span className="font-medium text-gray-800">{email}</span> with all the details.
        </p>
        <div className="bg-gray-100 p-5 rounded-lg mb-8 shadow-sm">
          <p className="font-medium text-gray-800 mb-2">{meetingTitle}</p>
          <p className="text-gray-600">{formatDate(selectedDate)}</p>
          <p className="text-gray-600 font-medium">{selectedTime}</p>
        </div>
        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
          Add to Calendar
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Confirm your booking</h3>
      <div className="bg-gray-100 p-5 rounded-lg mb-6 shadow-sm">
        <p className="font-medium text-gray-800 mb-2">{meetingTitle}</p>
        <p className="text-gray-600">{formatDate(selectedDate)}</p>
        <p className="text-gray-600 font-medium">{selectedTime}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
        </Button>
      </form>
    </div>
  );
} 