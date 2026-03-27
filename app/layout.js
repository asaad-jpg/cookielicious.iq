import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/components/CartProvider";

export const metadata = {
  title: "Cookielicious",
  description: "Luxury cookies in Iraq."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <HeaderWrapper />
              <main className="container page-shell">{children}</main>
              <footer className="footer">
                <div className="container footer-inner">
                  <span>© {new Date().getFullYear()} Cookielicious</span>
                  <span>Luxury cookies in Iraq.</span>
                </div>
              </footer>
              <div className="watermark">asaad</div>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
