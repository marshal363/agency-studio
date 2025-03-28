import { useState } from 'react';

interface CalendarSelectorProps {
  defaultMonth?: string;
  defaultYear?: number;
  onDateSelected?: (date: Date) => void;
  onTimeSelected?: (time: string) => void;
}

export function CalendarSelector({
  defaultMonth = 'marzo',
  defaultYear = 2025,
  onDateSelected,
  onTimeSelected
}: CalendarSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'12h' | '24h'>('12h');
  
  const timeSlots = ['1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am', '4:00am'];
  
  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    if (onDateSelected) {
      const date = new Date(defaultYear, 2, day); // March is 2 (0-indexed)
      onDateSelected(date);
    }
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (onTimeSelected) {
      onTimeSelected(time);
    }
  };

  const toggleViewMode = (mode: '12h' | '24h') => {
    setViewMode(mode);
  };
  
  // Generate the appropriate days for the calendar
  const generateCalendarDays = () => {
    // For marzo 2025, figure out what day of the week March 1st is
    const firstDay = new Date(2025, 2, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysInMonth = 31; // March has 31 days
    
    // Create an array for all the day cells, including empty ones for proper alignment
    const days = [];
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-9"></div>);
    }
    
    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <button 
          key={`day-${i}`} 
          className={`h-9 w-9 rounded-full flex items-center justify-center text-sm transition-colors
            ${i === 29 ? 'bg-gray-100 font-medium' : ''} 
            ${selectedDate === i ? 'bg-blue-100 text-blue-700 font-medium shadow-sm' : 'hover:bg-gray-100'}`}
          onClick={() => handleDateSelect(i)}
        >
          {i}
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="w-full p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium text-gray-700">{defaultMonth} {defaultYear}</h3>
        <div className="flex space-x-1">
          <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-3 text-center">
        <div className="text-sm font-medium text-gray-600">DOM</div>
        <div className="text-sm font-medium text-gray-600">LUN</div>
        <div className="text-sm font-medium text-gray-600">MAR</div>
        <div className="text-sm font-medium text-gray-600">MIÉ</div>
        <div className="text-sm font-medium text-gray-600">JUE</div>
        <div className="text-sm font-medium text-gray-600">VIE</div>
        <div className="text-sm font-medium text-gray-600">SÁB</div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-6 items-center justify-items-center">
        {generateCalendarDays()}
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-medium text-gray-600">sáb 29</span>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
              viewMode === '12h' ? 'bg-gray-200 text-gray-800' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => toggleViewMode('12h')}
          >
            12 h
          </button>
          <button 
            className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
              viewMode === '24h' ? 'bg-gray-200 text-gray-800' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => toggleViewMode('24h')}
          >
            24hs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {timeSlots.map((time) => (
          <button 
            key={time} 
            className={`py-3 text-center border rounded-lg transition-colors hover:bg-gray-50 ${
              selectedTime === time ? 'border-blue-300 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 text-gray-700'
            }`}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
} 