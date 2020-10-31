import "../styles/globals.css";
import { Container } from "react-bootstrap";
import NavigationBar from "../components/navigationBar";

import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
