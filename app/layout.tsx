// // layout.tsx

import './globals.css';
import 'tailwindcss/tailwind.css';
import ProgressBarComponent from '../components/ProgressBarComponent'; // Adjust the path as necessary

export const metadata = {
  title: 'AIRBNB',
  description: '2.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBarComponent /> {/* Include the ProgressBarComponent here */}
        {children}
      </body>
    </html>
  );
}
