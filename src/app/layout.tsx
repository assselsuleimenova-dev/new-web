import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-[ALS_Sirius,sans-serif]">
        {children}
      </body>
    </html>
  );
}
