import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_camera from './../images/background_camera.jpg';
import profile from './../images/profile.jpg';

export default function Om_oss() {
	return (
		<>
			<Jumbotron id="jumbotron-about" jumbotron-fluid="true" style={{ backgroundImage: `url(${background_camera})`, backgroundSize: 'cover' }}>
				<div className="text-container" fluid="true">
					<Heading size="5" content="La oss skape magi"/>
					<Heading content="Teamet drevet av lidenskap"/>
					<p>August MedieStudio ble etablert sommeren 2018 i forbindelse med en produksjon av kortfilmen «Fri som Fuglen». Høsten 2020 ble selskapet gjort om til et aksjeselskap i forbindelse med produksjon av SoMe-teasere for blant annet Pashn og Stamina Helse. I begynnelsen av 2021 rigget vi oss om til å konsultere og produsere e-læringsmoduler for kunnskapsbedrifter, hvor vi skreddersyr e-læringskurs i samarbeid med oppdragsgiver. Vi er involvert i hele prosessen fra idéutvikling (blant annet pedagogiske og didaktiske elementer og uttrykk) til produksjon og ferdigstillelse.</p>
					<p>Produksjon av e-læring er en grunnpilar i driften av August MedieStudio AS, hvor skaper læresystemer med god struktur, enkel og lettfattelig design og blanding av multimediaelementer, hvor det også legges til rette for interaktivitet. Det siste året har virkelig satt fart på behovet og bruken av e-læringsplattformer, som også gjør det enklere for kursdeltagerne å gjennomføre opplæring når det måtte passe. Bedrifter får dessuten muligheten til å tilby flere av sine ansatte nødvendig opplæring, uten at det påløper store kostnader.</p>
					<p>Etterspørselen etter e-læringskurs, har den siste tiden vært hovedfokus, men August MedieStudio tilbyr også en rekke andre tjenester, og er behjelpelig med alt innen videoproduksjon for bedrifter og organisasjoner. Vi kan tilby assistanse både for store og små produksjoner. Vi har også kompetanse på produksjon av hjemmesider, e-butikk, musikkproduksjon, lyddesign med mer.</p>
					<p id="bottom">For oss er det viktig med personligoppfølging av våre kunder og vi tilbyr produksjoner til gode priser. Vi kan love at vi sammen kommer fram til gode løsninger skreddersydd ditt behov.</p>
				</div>
			</Jumbotron>
			<div className="about-container">
				<div className="img-container">
					<img src={profile} alt="Team leader, Claus Peter Erlandsen"/>
				</div>
				<div className="info-container">
					<Heading size="3" content="Claus Peter Erlandsen"/>
					<h5>Daglig leder/Produsent at August MedieStudio</h5>
					<p>Som tidligere videregående lærer i media og kommunikasjon har jeg både teoretisk kunnskap og lang erfaring innen dette feltet. Som selskapsleder og hovedprodusent har jeg ansvaret for produksjon, konseptoppretting, storyboarding, kunst / design. Også av videografi, grafikk, komposisjon, postproduksjon og redigering. Jeg vil være din direkte kontakt under den første kommunikasjonsutvekslingen.</p>
					<p>	Det er andre dyktige konsulenter som er involvert i vår arbeidsprosess, avhengig av type og størrelse på prosjektet.                                                         </p>
				</div>
			</div>
			<div className="testimonial-container">
				<Heading size="3" content="Hva noen av våre kunder ha å si om oss"/>
				<p>"August Mediestudio representerer en unik kombinasjon av kreativitet, teknisk forståelse og samarbeidsevne. Vi ville jobbe med ett fremoverlent studio som kunne bidra sterkt i vår digitaliseringsprosess. Det fant vi  i August Mediestudio."</p>
				<p id="signature">Stig Eriksen, avdelingsleder Digital Læring, Avonova</p>
			</div>
		</>
	);
}