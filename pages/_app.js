/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Manrope } from "next/font/google";
// the chat bubble is not needed for first paint: load its JS and CSS after the page
const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppLazy"),
  { ssr: false }
);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/updated-themes/layout/header";
import Footer from "@/components/updated-themes/layout/footer";

// Self-hosted at build time (no render-blocking request to Google). This one variable font
// replaces four Google families that were loaded on every page; only Manrope is used.
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

const GTM_ID = "GTM-MJ7N476N";
const ADS_ID = "AW-11117116405";

export default function App({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Top Renovation & Construction Services in Dubai | Expert Electricians, AC Maintenance, False Ceiling, House Renovation, Painting, Carpentry, Plumbing, Flooring & More</title>
        <meta
          name="Description"
          content="Offering expert renovation and construction services in Dubai, including electrical work, AC maintenance, painting, plumbing, flooring, and more. Trusted professionals for all your home and office needs."
        ></meta>
        <meta
          name="google-site-verification"
          content="VMa3bsJixEcnsmn-
ydK0ICnZq8AeM5tWamfIxsdknLI"
        ></meta>
      </Head>

      {/* plain <style>: styled-jsx would stamp a hash class on every element and mismatch on hydration */}
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `:root{--font-manrope:${manrope.style.fontFamily}}` }} />

      {/* Analytics: loaded after the page is interactive and idle, not in <head>. */}
      <Script id="gtm" strategy="lazyOnload">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
      <Script id="gtag-src" src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="lazyOnload" />
      <Script id="gtag-config" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');`}</Script>

      <Header/>

      <div className="mainContainer">
        <div className="">
          <Component {...pageProps} />
        </div>

        <Footer/>
         
        <WhatsAppWidget />
       
        <a
          href={`tel:+971524052485`}
          className="flex items-center z-50 text-lg font-medium leading-normal bg-white lg:w-16 lg:h-16 w-12 h-12 rounded-full justify-center fixed right-5 bottom-24 lg:bottom-56 shadow-lg text-gray-800 whitespace-nowrap"
          aria-label="phone icon"
        >
          <div className="">
            <FontAwesomeIcon icon={faPhone} className="w-6 " />
          </div>
        </a>
      </div>
    </>
  );
}
