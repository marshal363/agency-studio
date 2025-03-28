# Cal.com Integration Setup Guide

This guide will help you set up and configure the Cal.com integration for the booking system.

## Prerequisites

1. Create a [Cal.com](https://cal.com) account
2. Set up your availability and event types in Cal.com

## Configuration Steps

### 1. Update Configuration File

Open `src/config/cal-config.ts` and update the following values:

```typescript
// Your Cal.com username - this is used for the embed
export const CAL_USERNAME = "your-cal-username"; // Replace with your actual Cal.com username
```

### 2. Google Calendar Integration (Optional)

If you want to integrate with Google Calendar:

1. Sign in to Cal.com
2. Go to Settings > Integrations
3. Click on Google Calendar
4. Follow the prompts to connect your Google account
5. Set your default calendar

### 3. Event Types Configuration

Make sure you've set up an event type in Cal.com that matches the booking settings in your configuration:

```typescript
// Default booking settings
export const DEFAULT_BOOKING_SETTINGS = {
  title: "Skale Solutions Intro",
  description: "30 min call to discuss your project and business goals",
  duration: 30, // in minutes
};
```

Create a matching event type in Cal.com with:

- The same title
- Duration (30 minutes)
- Similar description
- Your availability

### 4. Branding and Appearance

You can customize the appearance of the Cal.com embed by updating:

```typescript
export const CAL_APPEARANCE = {
  brandColor: "#4f46e5", // Change to match your brand color
  theme: "light", // 'light' or 'dark'
};
```

## Testing

After configuration:

1. Visit the booking page `/book-call`
2. Verify the calendar loads correctly
3. Test creating a booking
4. Confirm the booking appears in both Cal.com and Google Calendar (if integrated)

## Troubleshooting

If you encounter issues:

- Ensure your Cal.com username is correct
- Check that you have public event types created in Cal.com
- Verify that the Cal.com API is accessible from your deployment environment
- Check browser console for any errors
