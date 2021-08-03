import ChannelStatus from "../components/ChannelStatus";
import Footer from "../components/Footer";
import LastVideos from "../components/LastVideos";
import Main from "../components/Main";

export default function Home() {
  return (
   <>
    <Main />
    <ChannelStatus />
    <LastVideos />
    <Footer />
   </>
  );
}
