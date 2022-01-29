import '../styles/globals.css'
import  App from '../components/app'

function MyApp({ Component, pageProps }) {

  return(
    <App>
      <Component {...pageProps} />
    </App>
  )}

export default MyApp
