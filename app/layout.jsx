import "./globals.css";

export const metadata = {
  title: "Abhinandan Mishra — Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
