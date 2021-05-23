import Heading from "../layout/Heading";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import headphones_img from './../images/headphones_Xd.jpg';
import studio_img from './../images/for_Xd.jpg';
import program_img from './../images/editing_program.jpg';
import meeting_img from './../images/meeting.jpg';
import camera_img from './../images/camera.jpg';
import stamina from './../images/stamina-logo.png';
import avonova from './../images/avonova.png';
import pashn from './../images/pashn.png';
import ingenii from './../images/ingenii.jpg';
import { Link } from "react-router-dom";


export default function Home() {
	return <>
        <div className="Header_container">
            <div className="main_cta">
                <Heading content="Du drømmer"></Heading>
                <Heading size="2" className="cta_title" content="Vi skaper"/> 
                <p>Har du en ide, men ikke midler til å gjøre den til (digital) virkelighet?<br></br> Da er du på rett sted.<br></br>Sjekk ut hva vi gjør, og hvordan vi kan hjelpe deg.</p>
                <Link to="/services"><button>Finn ut mer</button></Link>
            </div>
            <div className="carousel_container">
                <Carousel slide={false} fade={false}>
                    <Carousel.Item>
                        <img className="d-block w-60" src={headphones_img} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-60" src={studio_img} alt="Second slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

        <div className="cta_container">
            <Heading size="3" content="Bare himmelen er grensen"/>
            <p>Som et produksjonsfirma med full service skaper og produserer vår gruppe av innovative hjerner innhold for læringsplattformer, reklame og sosiale medier. Vi lager, utvikler og produserer videoer og digitalt innhold for publikum i alle aldre på forskjellige digitale plattformer.</p>
            <Link to="/process"><button>Vår arbeidsprosess</button></Link>
        </div>

        <Container className="collage justify-content-md-center" fluid="true">
                <Col className="grid-item pink">
                    <Heading size="4" content="Din idee og vår kunnskap"/>
                    <p>Vår lange erfaring med å lage digitale mediematerialer gjør det mulig å tilpasse seg ideene du måtte ta med oss.</p>
                </Col>
                <img src={camera_img} alt="Camera"  className="grid-item"/>
                <Col className="grid-item purple">
                <Heading size="4" content="Sammen finner vi den beste løsningen for deg"/>
                    <p>Hos oss vil du føle deg sett og hørt. Vi arbeider for deg, <i>med</i> deg. </p></Col>
                <img src={program_img} alt="Editing program"  className="grid-item"/>
                <Col className="grid-item salmon">
                <Heading size="4" content="Din mening er viktig for oss"/>
                    <p>Kundene våre er involvert i vår kreative prosess hvert trinn. </p></Col>
                <img src={meeting_img} alt="Client meeting"  className="grid-item"/>
        </Container>

    
        <div className="logos-container">
            <Heading size="3" content="Noen av våre klienter"/>
            <div className="customer-logos">
                <img src={stamina} alt="Company Stamina's logo"  width="300px"/>
                <img src={avonova} alt="Company Avonova's logo"  width="300px"/>
                <img src={pashn} alt="Company Pashn's logo" width="180px"/>
                <img src={ingenii} alt="Company Ingenii's logo" width="300px"/>
            </div>
        </div>
    </>;
}