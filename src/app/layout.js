import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const lilitaOne = Lilita_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Пътна помощ Провадия",
  description: "Професионална пътна помощ в град Провадия - бързи и надеждни услуги за автомобили при аварии и пътни инциденти, достъпни 24/7.",
  
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
