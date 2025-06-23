import "./globals.css"

export const metadata = {
  title: "Jackson Mugwe - Software Engineer & Data Scientist",
  description: "Building the future of healthcare through innovative technology solutions",
  generator: "v0.dev",
  keywords: ["portfolio", "software engineer", "AI", "machine learning", "health tech", "data science"],
  authors: [{ name: "Jackson Mugwe" }],
  creator: "Jackson Mugwe",
  publisher: "Jackson Mugwe",
  openGraph: {
    title: "Jackson Mugwe - Software Engineer & Data Scientist",
    description: "Building the future of healthcare through innovative technology solutions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-slate-50">
        {children}
      </body>
    </html>
  )
}
