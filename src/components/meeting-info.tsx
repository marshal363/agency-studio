interface MeetingInfoProps {
  title: string;
  organization: string;
  duration: string;
  details: string[];
  location?: string;
  videoProvider?: string;
}

export function MeetingInfo({
  title,
  organization,
  duration,
  details,
  location = "America/Toronto",
  videoProvider = "Cal Video"
}: MeetingInfoProps) {
  return (
    <div className="w-full p-6">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 mr-4 bg-red-500 rounded-full flex items-center justify-center shadow-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4l3 3"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{organization}</p>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="mb-2 font-medium text-gray-700">Here&apos;s what we&apos;ll be doing for:</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-gray-400">-</span>
            <span>{duration}</span>
          </li>
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-gray-400">-</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mb-4 text-gray-600">
        <span className="mr-3 text-lg">⏱️</span>
        <span className="font-medium">{duration}</span>
      </div>
      
      <div className="flex items-center mb-4 text-gray-600">
        <span className="mr-3 text-lg">🎥</span>
        <span className="font-medium">{videoProvider}</span>
      </div>
      
      <div className="flex items-center text-gray-600">
        <span className="mr-3 text-lg">🌎</span>
        <span className="font-medium">{location}</span>
      </div>
    </div>
  );
} 