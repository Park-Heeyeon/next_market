import { Provider } from "@/components/ui/Provider";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import ModalContainer from "@/components/modal/ModalContainer";

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
          <ModalContainer />
        </body>
      </Provider>
    </html>
  );
}
