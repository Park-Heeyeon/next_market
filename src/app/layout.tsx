import { Provider } from "@/components/ui/Provider";
import "./globals.css";
import { Footer, Header } from "@/components/layout";
import ModalContainer from "@/components/modal/ModalContainer";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Suspense>
            <Header />
            {children}
            <Footer />
            <ModalContainer />
          </Suspense>
        </body>
      </Provider>
    </html>
  );
}
