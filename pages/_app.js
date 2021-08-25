import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from 'react-redux';
import store from '../redux/store';
const GlobalStyle = createGlobalStyle`
   
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}

export default MyApp
