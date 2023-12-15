import "./globals.css";
// import Header  from '../components/Header.js'
import localFont from "next/font/local";

const adriana = localFont({
  src: "./adriana.woff2",
  display: "swap",
});

export const metadata = {
  title: "New Nightz Are Coming",
  description:
    "Just days away from redefining the tourism, NFT and RWA industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${adriana.className} relative`}>
        <div className="bg-[url('/bg-mobile.avif')] md:bg-[url('/background.avif')] w-full h-full bg-cover bg-bottom bg-no-repeat -z-20 absolute top-0"></div>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
