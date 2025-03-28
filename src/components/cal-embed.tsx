import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CAL_USERNAME, CAL_APPEARANCE, DEFAULT_BOOKING_SETTINGS } from '@/config/cal-config';

interface CalEmbedProps {
  calUsername?: string;
  calendarTitle?: string;
  calendarDescription?: string;
  className?: string;
}

// Define a type for the Cal API
interface CalApiNamespace {
  q: Array<unknown>; // Using unknown instead of any
}

interface CalApi {
  ns?: {
    [key: string]: CalApiNamespace;
  }
}

export function CalEmbed({
  calUsername = CAL_USERNAME,
  calendarTitle = DEFAULT_BOOKING_SETTINGS.title,
  calendarDescription = DEFAULT_BOOKING_SETTINGS.description,
  className = ''
}: CalEmbedProps) {
  useEffect(() => {
    (async function() {
      const cal = await getCalApi();
      // Cast to our defined type
      const calApi = cal as CalApi;
      if (calApi.ns && calApi.ns['embed'] && calApi.ns['embed'].q) {
        calApi.ns['embed'].q.push(['config', {
          hideEventTypeDetails: 'false', // Use string instead of boolean
          layout: 'month_view',
          styling: {
            brandColor: CAL_APPEARANCE.brandColor,
            hideEventTypeDetails: 'false', // Use string instead of boolean
          },
        }]);
      }
    })();
  }, []);
  
  return (
    <div className={`cal-embed-wrapper ${className}`}>
      <Cal
        calLink={calUsername}
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        config={{
          name: calendarTitle,
          notes: calendarDescription,
          hideEventTypeDetails: 'false', // Use string instead of boolean
          layout: 'month_view',
          // Only include theme if it's compatible with the Cal.com API
          ...(CAL_APPEARANCE.theme === 'dark' || CAL_APPEARANCE.theme === 'light' 
            ? { theme: CAL_APPEARANCE.theme } 
            : {})
        }}
      />
    </div>
  );
} 