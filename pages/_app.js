import "../styles/globals.css";
import { Container } from "react-bootstrap";
import NavigationBar from "../components/navigationBar";

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
