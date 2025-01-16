import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "OpusCafé",
  description: "make your time little smoother! with one cup COFFE!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  antialiased`}>{children}</body>
    </html>
  );
}
