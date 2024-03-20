import "./globals.css";
import Navbar from "@/components/navigation-navbar/Navbar";
import Footer from "@/components/navigation-footer/Footer";

export const metadata = {
  title: "Premier Ikon",
  description:
    "Elevating Brands to Iconic Status. Specializing in Global Merchandising, Innovative Product Development, and Dynamic Branding Strategies, we empower brands to captivate and connect with audiences worldwide. Our passion lies in transforming inspiration into reality, championing creativity, and forging genuine, authentic connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
