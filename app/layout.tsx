import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import { ReservationProvider } from "./_context/ReservationContext";
import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "Cabin hotel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">
            <ReservationProvider>{children} </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
