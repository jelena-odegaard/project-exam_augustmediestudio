import Heading from "../layout/Heading";
import ContactForm from "../contact/ContactForm";
import SimpleMap from "./GoogleMap";

export default function Contact() {
	return <>
		<div className="contact-container">
			<Heading content="Hvordan kan vi hjelpe deg?" />
			<h2>Ta gjerne kontakt!</h2>
			<div className="contact-wrapper">
				<div className="contactform-container">
					<ContactForm/>
				</div>
				<div className="address-container">
					<SimpleMap/>
					<div className="address">
						<p>August mediestudio</p>
						<p>Øvregata 7</p>
						<p>3264 Larvik</p>
						<p>augustmediestudio@gmail.com</p>
						<p>(+47)911 53 506</p>
					</div>
				</div>
			</div>
		</div>
		</>
}