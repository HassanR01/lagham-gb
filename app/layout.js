import Footer from "./components/main/footer";
import Header from "./components/main/header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 font-mainFont flex flex-col justify-start items-center relative text-textColor">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
