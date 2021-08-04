import Head from "next/head";
import ChannelStatus from "../components/ChannelStatus";
import Footer from "../components/Footer";
import LastVideos from "../components/LastVideos";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fique no Controle</title>
      </Head>
      <Main />
      <ChannelStatus />
      <LastVideos />
      <Footer />
    </>
  );
} 
