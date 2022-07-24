import '../styles/globals.css'


import Notification from "../components/common/notification";
import {useHasNewDeploy} from "next-deploy-notifications";

function MyApp({ Component, pageProps }) {
  let { hasNewDeploy } = useHasNewDeploy();
  return (
    <>
    <Component {...pageProps} />       
    {hasNewDeploy && <Notification/>}
     </>
    )
}

export default MyApp
