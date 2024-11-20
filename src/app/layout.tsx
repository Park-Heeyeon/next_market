import { Provider } from "@/components/ui/Provider";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
