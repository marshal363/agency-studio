# Cal.com Integration for Agency Studio

This project integrates [Cal.com](https://cal.com) into the Agency Studio booking system to provide real appointment scheduling functionality.

## Overview

We've implemented Cal.com's embed solution to provide scheduling functionality while maintaining our custom UI. The integration allows:

- Displaying available time slots from Cal.com
- Scheduling appointments that sync with Google Calendar
- Maintaining our custom design while leveraging Cal.com's robust scheduling backend

## Getting Started

### 1. Install Dependencies

The project uses the Cal.com embed SDK:

```bash
npm install @calcom/embed-react
```

### 2. Configuration

Configure your Cal.com integration by updating the settings in:
`src/config/cal-config.ts`

You'll need to:

1. Update your Cal.com username
2. Configure your brand colors
3. Set up your default booking settings

### 3. Cal.com Account Setup

To use this integration, you need to:

1. Create a Cal.com account at [cal.com](https://cal.com)
2. Set up your availability
3. Create event types that match your configured settings
4. Connect your Google Calendar in Cal.com settings

For detailed setup instructions, see: [Cal Integration Setup Guide](./docs/cal-integration-setup.md)

## Architecture

The integration uses three main components:

1. **CalEmbed Component** (`src/components/cal-embed.tsx`):
   A wrapper around the Cal.com embed SDK that handles configuration and styling

2. **Configuration** (`src/config/cal-config.ts`):
   Central configuration for Cal.com settings

3. **Booking Page** (`src/app/book-call/page.tsx`):
   Main page that uses the Cal.com component for scheduling

## Usage

The booking system maintains the existing UI structure while using Cal.com for the actual scheduling functionality.

Users can:

1. View the meeting information
2. Select available time slots from your Cal.com schedule
3. Complete the booking through Cal.com's interface
4. Receive confirmation emails and calendar invites

## Troubleshooting

See the [Cal Integration Setup Guide](./docs/cal-integration-setup.md) for common issues and solutions.
