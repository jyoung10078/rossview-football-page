# Rossview Hawks Football Website

A modern, responsive website for the Rossview High School Hawks football team in Clarksville, Tennessee. This project provides information about the team, schedule, gallery, sponsors, and more.

Hosted on Vercel here: https://www.rossviewhawksfootball.com/

## Overview

I used the shadcn component library to make a very clean looking website for the Rossview High School Football team. Below, I have included screenshots for convenience. Please feel free to reach out to me at jyoung10078@gmail.com with any questions or concerns. Also, feel free to contribute!

![Uploading image.png…]()


## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Static type-checking for JavaScript
- **Vite**: Next-generation frontend tooling
- **React Router**: For navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components built with Radix UI and Tailwind
- **React Query**: For data fetching and state management
- **EmailJS**: For contact form functionality

## Features

- Responsive design for all device sizes
- Team roster and coaching staff information
- Game schedules and results
- Photo gallery
- Sponsor showcase
- Contact form
- About page with program information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rossview-football-page.git
   cd rossview-football-page
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Create a `.env` file in the root directory with your environment variables:
   ```
   VITE_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
rossview-football-page/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and libraries
│   ├── pages/          # Page components
│   ├── App.tsx         # Main App component
│   ├── config.ts       # Configuration constants
│   └── main.tsx        # Entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Customization

- **Colors**: Edit the `tailwind.config.ts` file to change the color scheme
- **Content**: Update the content in the page components under `src/pages/`
- **Images**: Replace images in the `src/assets/` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Rossview High School and its football program
- The shadcn/ui team for their excellent component library
- The React and Vite communities for their amazing tools
