/**
 * Cal.com Integration Configuration
 * 
 * This file contains the configuration for Cal.com integration.
 * You'll need to sign up for Cal.com and create an account to use this integration.
 */

// Your Cal.com username - this is used for the embed
export const CAL_USERNAME = 'sergio-ardila-l9gelo';

// Google Calendar integration settings
// To integrate with Google Calendar:
// 1. Sign in to Cal.com
// 2. Go to Settings > Integrations
// 3. Connect your Google Calendar
// 4. Set your default calendar
export const GOOGLE_CALENDAR_INTEGRATION = {
  enabled: true,
  // Default calendar ID (optional) - leave empty to use Cal.com default
  defaultCalendarId: '',
};

// Appearance customization
export const CAL_APPEARANCE = {
  // Customize the colors to match your brand
  brandColor: '#4f46e5', // Primary brand color
  theme: 'light', // 'light' or 'dark'
};

// Default booking settings
export const DEFAULT_BOOKING_SETTINGS = {
  title: 'Skale Solutions Intro',
  description: '30 min call to discuss your project and business goals',
  duration: 30, // in minutes
}; 