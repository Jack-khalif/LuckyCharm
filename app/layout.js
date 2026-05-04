import { Caveat } from "next/font/google";
import "./globals.css";

// Configure the handwritten font
const caveat = Caveat({ 
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata = {
  title: "Jackson Mugwe | Biomedical Engineer",
  description: "Portfolio of Jackson Mugwe, MedTech Innovator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply the font globally to the body */}
      <body className={`${caveat.className} text-xl bg-[#fdfbf7]`}>
        {children}
      </body>
    </html>
  );
}