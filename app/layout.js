import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#12112F]">
        <Header />
        <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-4">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
