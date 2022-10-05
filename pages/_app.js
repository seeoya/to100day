import { Provider } from "react-redux";
import Layout from "../component/Layout";
import "../styles/globals.scss";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
