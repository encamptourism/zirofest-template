import '../styles/globals.css'
import {useHasNewDeploy} from "next-deploy-notifications";

function MyApp({ Component, pageProps }) {
  let { hasNewDeploy } = useHasNewDeploy();
  return (
    <>
    <Component {...pageProps} />
    {hasNewDeploy && (
        <Notification>
          New version available!
          <button onClick={() => window.location.reload()}>Refresh</button>
        </Notification>
      )}
     </>
    )
}

export default MyApp
