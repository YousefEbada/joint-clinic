
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="icon" content="#" />
      </head>
      <body
        className={`antialiased h-[100vh] h-[100%]  flex flex-col justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
