import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className="bg-black antialiased overflow-x-hidden">
        <Toaster 
          theme="dark" 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              border: '1px solid #164e63', // cyan-900
              color: '#22d3ee', // cyan-400
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              fontSize: '10px',
              letterSpacing: '0.1em'
            },
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}