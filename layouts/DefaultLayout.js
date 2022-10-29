import Nav from "./partials/Nav";
import Footer from "./partials/Footer";

export default function DefaultLayout(props) {
    return (
        <>
            <Nav/>
            {props.children}
            <Footer/>
        </>
    );
}