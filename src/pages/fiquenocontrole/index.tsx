import Head from "next/head";
import ChannelStatus from "../../components/fiquenocontrole/ChannelStatus";
import Footer from "../../components/fiquenocontrole/Footer";
import LastVideos from "../../components/fiquenocontrole/LastVideos";
import Main from "../../components/fiquenocontrole/Main";

const FiqueNoControle = () => (
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

export default FiqueNoControle;
