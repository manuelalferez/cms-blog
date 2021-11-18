import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen relative">
      <Head>
        <title>Manuel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://ik.imagekit.io/manuelalferez/blog/favicon_V2z4CMYwwd.png"
        />
      </Head>
      <Header />
      <div className="mb-auto">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
