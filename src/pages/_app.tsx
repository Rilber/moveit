import '../styles/pages/global.css';
import { ChallengesContext, ChallengesProvider }  from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext';


function MyApp({ Component, pageProps }) {

  return (
        <Component {...pageProps} />
  )

}

export default MyApp