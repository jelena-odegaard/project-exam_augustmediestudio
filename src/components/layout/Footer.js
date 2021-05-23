import { FaFacebook } from 'react-icons/fa';
import { FaVimeo } from 'react-icons/fa';
import Container from "react-bootstrap/Container";


export default function Footer(){
    return <>
        <footer>
            <Container  className="footerContainer">
                <div className="copyright">
                    <p>&#64; 2021 August mediestudio. All rights reserved.</p>
                </div>
                <div className="socilas">
                    <a href="https://www.facebook.com/August-MedieStudio-101254538830564"><FaFacebook size={28} color="#411056"/></a>
                    <a href="https://vimeo.com/user110631532"><FaVimeo size={28} color="#411056"/></a>
                </div>
            </Container>
        </footer>
    </>
}