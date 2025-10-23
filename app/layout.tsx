import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import FooterLegal from "./pages/body/foot";

export const metadata = {
  title: "Acorns",
  description: "Micro-investing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />

        {/* This section only for the homepage */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <FooterLegal />
      </body>
    </html>
  );
}
