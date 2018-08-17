import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import Withwork from '../Footer/Withwork';
import './Policy.css';

class Policy extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		const { t } = this.props;

		return (
			<div className="about policy">
				<div className="header-banner about-banner policy-banner">
					<div className="glass-section">
						<div className="slogan-section">
							<div className="container">
								<div className="about-banner-text">
									<span className="slogan">{t('Star Tracking Privacy Policy')}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-10 col-xl-8 about-body-container">
							<p>
								<strong>Over Star-Tracking:</strong>
							</p>
							<p>
								Welkom bij Star-Tracking. Star-Tracking ("Bedrijf", "wij", "ons" en/of "onze") stelt
								mensen overal ter wereld in staat om evenementen te plannen, te promoten en tickets te
								verkopen. Verder kan iedereen via ons eenvoudig evenementen zoeken, en evenementen die
								ze bezoeken doorgeven aan vrienden en kennissen. Dit doen we via onze websites en
								domeinen, de services die we bieden op of via onze websites en domeinen of die op een
								andere manier door ons worden aangeboden, en met de software die beschikbaar is op onze
								websites en domeinen of die op een andere manier door ons wordt aangeboden (inclusief
								onze mobiele applicaties zoals de Star-Tracking -app) (tezamen de "Services").
							</p>
							<p>
								<strong>Ons beleid:</strong>
							</p>
							<p>
								In dit Privacybeleid wordt ons beleid uiteengezet met betrekking tot informatie,
								inclusief persoonlijk identificeerbare gegevens ("Persoonsgegevens"), die worden
								verzameld van gebruikers van en/of bezoekers van de Services (inclusief via agenten van
								die gebruikers en bezoekers) ("jij" of "jouw"), inclusief (i) geregistreerde gebruikers
								die organisatoren en planners van evenementen zijn ("Organisatoren"), (ii) gebruikers
								die tickets willen kopen voor, zich willen registreren voor, of een schenking willen
								doen aan evenementen (gratis of betaald) op lijsten geplaatst door Organisatoren in de
								Services ("Kopers"), en (iii) andere gebruikers of bezoekers van de Services die geen
								organisatoren zijn ("andere Niet-organisatoren").
							</p>
							<p>
								Wij nemen de privacy van je persoonsgegevens en andere gegevens serieus. Daarom hebben
								we dit Privacybeleid opgesteld. Lees dit Privacybeleid goed door, aangezien het
								belangrijke informatie bevat over je persoonsgegevens en andere informatie.
							</p>
							<p>
								Als je vragen of zorgen hebt, aarzel dan niet om contact met ons op te nemen via de
								volgende koppeling: http://www.startracking.be/contact.
							</p>
							<p>
								<strong>Instemming:</strong>
							</p>
							<p>
								Door gebruik te maken van de Services of iemand anders gebruik te laten maken van de
								Services namens jou stem je in met het verzamelen, gebruiken, openbaar maken, overdragen
								en opslaan conform dit Privacybeleid door ons van alle persoonsgegevens of andere
								gegevens die wij hebben ontvangen als gevolg van dergelijk gebruik.
							</p>
							<p>
								<strong>Informatie die wij verzamelen:</strong>
							</p>
							<p>
								Wanneer je gebruik maakt van onze Services, kunnen wij persoonsgegevens en andere
								gegevens van jou verzamelen, zoals hieronder verder wordt beschreven:
							</p>
							<p>1. PERSOONSGEGEVENS:</p>
							<p>
								Organisatoren: Wij verzamelen persoonsgegevens van je wanneer je dergelijke informatie
								vrijwillig verschaft aan de Services, zoals wanneer je je registreert voor toegang tot
								de Services als Organisator, ons een vraag stelt, reageert op een van onze onderzoeken
								of bepaalde Services gebruikt. De Persoonsgegevens die wij kunnen verzamelen omvatten
								zonder beperking je naam, adres, e-mailadres en andere persoonlijk identificeerbare
								informatie. In sommige gevallen kunnen we je creditcardgegevens verzamelen (bijv. je
								creditcardnummer en de vervaldatum, het factuuradres, enzovoort), waarvan sommige
								gegevens Persoonsgegevens kunnen zijn, om zeker te zijn van bepaalde betalingen.
								Daarnaast verzamelen we je, als je gebruikmaakt van onze services voor
								betalingsverwerking, bepaalde financiële gegevens van je (bijvoorbeeld je bankrekening
								of een adres om cheques naartoe te sturen) voor zover nodig om betalingen mogelijk te
								maken en met het oog op belastingafdracht (bijvoorbeeld je Burgerservicenummer).
							</p>
							<p>
								Kopers en andere Niet-organisatoren Wij verzamelen persoonsgegevens van je wanneer je
								dergelijke informatie vrijwillig verschaft aan de Services, (inclusief
								registratiepagina's voor evenementen binnen de Services), zoals wanneer je je
								registreert voor toegang tot de Services (als Organisator of anderszins), wanneer je je
								registreert voor een evenement als Koper, wanneer je contact met ons opneemt met een
								vraag, wanneer je reageert op een van onze onderzoeken of gebruikmaakt van bepaalde
								delen van de Services. De Persoonsgegevens die wij kunnen verzamelen omvatten zonder
								beperking je naam, adres, e-mailadres, postcode en andere persoonlijk identificeerbare
								informatie. Als je je registreert voor een betaald evenement, verzamelen wij financiële
								gegevens van je (bijv. je creditcardnummer en de vervaldatum, het factuuradres,
								enzovoort), waarvan sommige gegevens Persoonsgegevens kunnen zijn. Daarnaast kunnen
								Organisatoren registratiepagina's voor evenementen maken om vrijwel alle mogelijke
								gegevens te verzamelen van Kopers in verband met registratie voor een evenement van de
								Organisator dat in de Services voorkomt. Als een Koper deze gegevens vrijwillig
								verschaft in verband met registratie voor een evenement of anderszins, zijn de gegevens
								beschikbaar voor ons en zullen ze door ons worden opgeslagen conform dit Privacybeleid.
								Daarnaast zullen dergelijke gegevens worden geleverd aan de Organisator van het
								evenement in kwestie overeenkomstig "Onze openbaarmaking van gegevens die wij
								verzamelen: Organisatoren" hieronder.
							</p>
							<p>
								Koppelingen naar Privacybeleid: Wij streven ernaar een koppeling naar dit Privacybeleid
								te bieden in de voettekst van elke pagina op onze websites, inclusief die pagina's
								waarop Persoonsgegevens worden verzameld, en om deze beschikbaar te stellen in al onze
								software.
							</p>
							<p>2. NIET-PERSOONSGEGEVENS:</p>
							<p>
								Niet-identificeerbare gegevens: Wanneer je gebruikmaakt van onze Services, verzamelen
								wij bepaalde niet-identificeerbarepersoonsgegevens ("Niet-persoonsgegevens"). De
								Niet-persoonsgegevens die wij verzamelen, omvatten zonder beperking IP-adressen
								(Internet Protocol), type internetbrowser, andere kenmerken van je apparaat en software,
								domeinnamen van je internetprovider, je geografische locatie (bij benadering), een
								record van je gebruik van de Services, het tijdstip van het gebruik en geaggregeerde
								Persoonsgegevens die niet kunnen worden gebruikt om jou specifiek te identificeren.
								Dergelijke gegevens, die passief worden verzameld met verschillende technologieën,
								kunnen niet, in en op zichzelf, worden gebruikt om jou specifiek te identificeren. We
								verzamelen ook Niet-persoonsgegevens (inclusief, zonder beperking, van het type zoals
								hierboven uiteengezet) van derden. De gegevens die wij van derden verzamelen kunnen
								worden gecombineerd met de gegevens die wijzelf verzamelen.
							</p>
							<p>
								Cookies en andere sessie-id's: Voor onze Services gebruiken we een technologie met de
								naam "cookies." Een cookie is een klein bestandje met informatie dat in je browser wordt
								gezet als je de Services gebruikt. Door onze cookies krijgen de Services extra
								functionaliteit en kunnen wij het gebruik van de Services nauwkeuriger analyseren. Er
								kan bijvoorbeeld door onze Services een cookie in je browser worden gezet waardoor je
								toegang tot de Services krijgt zonder dat je een wachtwoord hoeft te onthouden en meer
								dan eenmaal hoeft in te voeren tijdens een bezoek. Deze cookies kunnen worden gebruikt
								om content aan te passen (inclusief advertenties) die je in de Services ziet, evenals
								andere internetsites die je in de toekomst mogelijk gaat bezoeken. Cookies kunnen
								sessiegebonden zijn (dat wil zeggen dat ze voor één browsersessie gelden), of permanente
								cookies (dat wil zeggen dat ze in je browser blijven staan totdat ze worden verwijderd
								of verlopen). Via de opties van je browser kun je de volgende instellingen opgeven: (i)
								meldingen ontvangen wanneer je nieuwe cookies ontvangt, (ii) cookies uitschakelen of
								(iii) cookies verwijderen. Raadpleeg de Help van je browser voor meer informatie
								hierover. We adviseren om cookies ingeschakeld te laten omdat ze je in staat stellen te
								profiteren van enkele functies van de Services. Naast de hierboven beschreven cookies
								gebruiken we ook lokaal gedeelde objecten, ook wel "Flash cookies," genoemd, en HTML 5
								Local Storage voor verschillende doeleinden, waaronder fraudepreventie en om content
								weer te geven (zowel in als buiten de Services) op basis van wat je bekijkt in de
								Services. Lokaal gedeelde objecten en HTML 5 Local Storage werken anders dan de cookies
								die hierboven zijn beschreven. De hulpmiddelen voor het beheren van cookies van je
								browser zijn mogelijk niet in staat om lokaal gedeelde objecten of HTML 5 Local Storage
								te verwijderen.
							</p>
							<p>
								Geaggregeerde persoonsgegevens: We streven er voortdurend naar om de gebruikers van de
								Services beter te leren kennen en van dienst te zijn. Daarom doen we vaak onderzoek naar
								de demografische gegevens van onze klanten, hun interesses en hun gedrag op basis van
								persoonsgegevens en andere informatie die we hebben verzameld. Dit onderzoek kan worden
								gecompileerd en geanalyseerd op basis van aggregatie en deze geaggregeerde gegevens
								kunnen niet worden gebruikt om jou persoonlijk te identificeren. Daarom worden deze
								gegevens in dit Privacybeleid beschouwd en behandeld als Niet-persoonsgegevens.
							</p>
							<p>
								<strong>Hoe wij omgaan met gegevens die wij verzamelen:</strong>
							</p>
							<p>1. PERSOONSGEGEVENS:</p>
							<p>
								Wij gebruiken de Persoonsgegevens die wij verzamelen op een manier die in
								overeenstemming is met dit Privacybeleid. Wij kunnen de Persoonsgegevens als volgt
								gebruiken:
							</p>
							<ul>
								<li>
									Specifieke reden: Als je Persoonsgegevens verstrekt om een specifieke reden, kunnen
									we de Persoonsgegevens gebruiken in verband met de reden waarom deze zijn verstrekt.
									Bijvoorbeeld: als je via e-mail contact met ons opneemt, gebruiken wij de
									Persoonsgegevens die je verstrekt om je vraag te beantwoorden of je probleem op te
									lossen, en sturen we ons antwoord naar het e-mailadres waarvandaan de vraag is
									verstuurd.
								</li>
								<li>
									Toegang en gebruik: Als je Persoonsgegevens verstrekt om toegang te krijgen tot of
									gebruik te maken van de Services of de functionaliteit daarvan, gebruiken we je
									Persoonsgegevens om je toegang te bieden tot of gebruik te laten maken van de
									Services of de functionaliteit en om jouw gebruik van de Services of de
									functionaliteit te monitoren. Als je bijvoorbeeld betalingsgegevens verstrekt (zoals
									bankrekening of creditcardgegevens) aan de Services om tickets te kopen als Koper,
									of voor het verwerken van betalingen als Organisator, gebruiken we die gegevens om
									de transactie te vergemakkelijken of de betalingen te verwerken.
								</li>
								<li>
									Interne bedrijfsdoeleinden: We kunnen je Persoonsgegevens gebruiken voor interne
									bedrijfsdoeleinden, inclusief en zonder beperking om ons te helpen de content en
									functionaliteit van de Services te verbeteren, om de gebruikers van de Services
									beter te leren kennen, om de Services te verbeteren, om bescherming te bieden tegen
									overtredingen, deze vast te stellen of aan te pakken, om onze Servicevoorwaarden af
									te dwingen, om je account te beheren en om je klantenservice te verlenen, en om de
									Services en onze bedrijfsvoering in het algemeen te beheren.
								</li>
								<li>
									Marketing: We kunnen je Persoonsgegevens gebruiken om in de toekomst contact met je
									op te nemen voor onze marketing en om reclame te maken, inclusief en zonder
									beperking om je te informeren over services of evenementen waarvan wij denken dat ze
									voor jou interessant zijn, om promotie- en marketingmateriaal te ontwikkelen en dit
									aan jou te laten toekomen, en om content en advertenties in of buiten de Services te
									vertonen waarvan wij denken dat die voor jou van belang zou kunnen zijn. Met name
									Organisatoren moeten zich realiseren dat wij gebruik kunnen maken van informatie die
									we ontvangen of verzamelen over Kopers (inclusief en zonder beperking van de
									registratiepagina voor een evenement van een Organisator) overeenkomstig de
									voorwaarden van dit Privacybeleid, inclusief op de manier zoals hierboven
									uiteengezet.
								</li>
								<li>
									E-mails van Organisatoren: Wij stellen Organisatoren in staat ons e-mailsysteem te
									gebruiken om contact op te nemen met Kopers voor hun lopende en voorbije
									evenementen, zodat je e-mails vanuit ons systeem kunt ontvangen die oorspronkelijk
									afkomstig zijn van zulke Organisatoren.
								</li>
							</ul>
							<p>
								Als wij van plan zijn Persoonsgegevens te gaan gebruiken op een manier die niet in
								overeenstemming is met dit Privacybeleid, stellen we je op de hoogte van dit voorgenomen
								gebruik voor of op het moment dat de Persoonsgegevens worden verzameld, of we vragen je
								om je toestemming nadat de gegevens zijn verzameld, maar voordat ze worden gebruikt.
							</p>
							<p>2. NIET-PERSOONSGEGEVENS:</p>
							<p>
								Omdat Niet-persoonsgegevens niet kunnen worden gebruikt om jou persoonlijk te
								identificeren, kunnen wij dergelijke gegevens voor elk juridisch toegestaan doel
								gebruiken.
							</p>
							<p>
								<strong>Onze openbaarmaking van gegevens die wij verzamelen:</strong>
							</p>
							<p>1. PERSOONSGEVENS:</p>
							<p>
								Wij zullen je Persoonsgegevens nooit doorverkopen. Wij beschouwen deze gegevens als een
								essentieel onderdeel van onze relatie met jou. Daarom zullen we je Persoonsgegevens niet
								doorverkopen aan derden, inclusief externe adverteerders. Er zijn echter bepaalde
								omstandigheden waarin wij jouw Persoonsgegevens openbaar kunnen maken, overdragen of
								uitwisselen met bepaalde derden zonder jou daarvan verder op te hoogte stellen, zoals
								hieronder uiteengezet:
							</p>
							<p>
								Bedrijfsoverdrachten: Naarmate ons bedrijf zich ontwikkelt, kunnen wij bedrijven of
								activa verkopen of kopen. In het geval van een overname, fusie, reorganisatie,
								ontbinding of vergelijkbare gebeurtenis, kunnen Persoonsgegevens deel uitmaken van de
								overgedragen activa. Je erkent en stemt ermee in dat een opvolger of nieuwe eigenaar van
								Star-Tracking (of de activa van Star-Tracking) het recht behoudt om gebruik te maken van
								jouw Persoonsgegevens en andere gegevens overeenkomstig de voorwaarden van dit
								Privacybeleid.
							</p>
							<p>
								Dochterondernemingen en partners: Wij kunnen je Persoonsgegevens ook delen met onze
								dochterondernemingen en/of partners voor doeleinden die in overeenstemming zijn met dit
								Privacybeleid. Onze dochterondernemingen en partners zijn verplicht om met de
								Persoonsgegevens om te gaan overeenkomstig dit Privacybeleid.
							</p>
							<p>
								Agenten, consultants en aanverwante derden: Zoals zoveel bedrijven, huren wij soms
								andere bedrijven in voor het uitvoeren van bepaalde bedrijfsgerelateerde functies.
								Voorbeelden van dergelijke functies zijn het via e-mail versturen van informatie,
								ticketafhandeling, fraudepreventie, databaseonderhoud en het verwerken van betalingen.
								Wanneer wij een ander bedrijf inhuren voor het uitvoeren van dergelijke functies, kunnen
								wij aan hen informatie verstrekken, inclusief Persoonsgegevens, in verband met het
								uitvoeren van deze functies.
							</p>
							<p>
								Organisatoren: Wanneer je tickets koopt, je registreert voor een evenement of een
								schenking doet voor een evenement in de Services, stem je ermee in dat wij jouw
								Persoonsgegevens ter beschikking stellen aan de Organisatoren van een dergelijk
								evenement. Deze Organisatoren zijn niet verplicht om met jouw Persoonsgegevens om te
								gaan overeenkomstig dit Privacybeleid. Je stemt ermee in dat wij niet verantwoordelijk
								zijn voor de manier waarop deze Organisatoren met jouw Persoonsgegevens omgaan. Het is
								belangrijk dat je het relevante beleid van de Organisatoren van een evenement doorneemt
								voordat je Persoonsgegevens of andere informatie in verband met dat evenement verstrekt.
							</p>
							<p>
								Facebook en andere verbindingen met derden: Je kunt je Star-Tracking -account koppelen
								aan je accounts bij services van derden, zoals Facebook. In dat geval kunnen we conform
								de bepalingen in dit Privacybeleid informatie met betrekking tot je account verzamelen,
								gebruiken, openbaar maken, overdragen en opslaan. Als je bijvoorbeeld een verbinding
								maakt met Facebook, slaan we je Facebook-id, voornaam, achternaam, e-mailadres, locatie,
								vriendenlijst en profielfoto op en gebruiken we deze om verbinding te maken met je
								Facebook-account om bepaalde functionaliteit van de Services te leveren. We kunnen
								bijvoorbeeld evenementen aanbevelen waarin je Facebook-vrienden zijn geïnteresseerd en
								de evenementen waarin jij bent geïnteresseerd delen met bepaalde groepen mensen, zoals
								je Facebook-vrienden.
							</p>
							<p>
								Juridische vereisten: We kunnen je Persoonsgegevens openbaar maken als we daartoe bij
								wet worden verplicht (inclusief en zonder beperking als reactie op een dagvaarding of
								een verzoek van een wethandhavende instantie, rechtbank of overheidsdienst) of wanneer
								wij van mening zijn dat een dergelijke actie noodzakelijk is (i) om te voldoen aan een
								juridische verplichting, (ii) ter bescherming of verdediging van onze rechten, belangen
								of eigendommen of die van derden, (iii) om mogelijke overtredingen in samenhang met de
								Services te voorkomen, te onderzoeken of vast te stellen, (iv) om in dringende
								omstandigheden te handelen ter bescherming van de persoonlijke veiligheid van gebruikers
								van de Services of het publiek, of (v) om ons te beschermen tegen wettelijke
								aansprakelijkheid.
							</p>
							<p>2. NIET-PERSOONSGEGEVENS:</p>
							<p>
								Omdat Niet-persoonsgegevens niet kunnen worden gebruikt om jou persoonlijk te
								identificeren, kunnen wij jouw Persoonsgegevens openbaar maken, overdragen of
								uitwisselen voor elk wettelijk doel.
							</p>
							<p>
								<strong>Jouw keuzen:</strong>
							</p>
							<p>Je hebt verschillende keuzen als het gaat om je Persoonsgegevens:</p>
							<p>
								De Persoonsgegevens die je verstrekt beperken: Je kunt de Services gebruiken zonder
								Persoonsgegevens te verstrekken of door de Persoonsgegevens die je verstrekt te
								beperken. Als je ervoor kiest geen Persoonsgegevens te verstrekken of de
								Persoonsgegevens die je verstrekt te beperken, kun je bepaalde functies van de Services
								mogelijk niet gebruiken. Zo zijn bijvoorbeeld voor het openen van een account of het
								kopen/verkopen van tickets je naam en e-mailadres verplicht.
							</p>
							<p>
								<strong>Opt-out:</strong>
							</p>
							<p>
								Je kunt aangeven dat je niet per e-mail nieuwsbrieven van Star-Tracking wilt ontvangen.
								Log hiervoor in, klik op 'Account' en volg bij 'E-mailvoorkeuren' de instructies. Je
								kunt de gemaakte keuzen op elk moment wijzigen in je Star-Tracking -account. Als een
								Organisator jou via ons systeem mailt, kun je ook aangeven deze informatie niet te
								willen ontvangen. Houd er rekening mee dat je, als je je afmeldt voor e-mails van een
								bepaalde Organisator, geen e-mails van die Organisator meer ontvangt die via ons systeem
								worden verzonden (je ontvangt mogelijk nog wel e-mails die zijn verzonden door die
								Organisator via andere kanalen dan ons systeem). Je ontvangt echter nog steeds
								Star-Tracking -mededelingen en mededelingen van andere Organisatoren van wie je
								evenementen hebt bezocht of bij wie je geregistreerd staat om evenementen te bezoeken of
								die op een andere manier aan je e-mailadres zijn gekomen. Evenzo geldt: als je je
								afmeldt voor mededelingen van ons, blijf je mededelingen ontvangen van Organisatoren. Je
								moet je dus bij meerdere afzenders afmelden voordat je helemaal geen mededelingen meer
								ontvangt. Je kunt je ook afmelden voor het ontvangen van alle e-mails van Organisatoren
								die via ons systeem worden verzonden. Het kan 24 uur duren voordat wij een verzoek tot
								afmelding hebben verwerkt. Houd er rekening mee dat je je niet kunt afmelden voor
								mededelingen over updates van de Services. Je kunt je alleen afmelden voor het ontvangen
								van mededelingen van de Services door contact met ons op te nemen op
								http://www.startracking.be/contact en je account te sluiten. Als je ervoor kiest
								helemaal geen mededelingen meer van ons of via ons systeem te ontvangen, krijg je geen
								informatie meer over updates van je account of over evenementen waarvoor je je hebt
								geregistreerd om te bezoeken of die je eerder hebt bezocht, inclusief mededelingen over
								restituties. We adviseren niet om dit te doen, tenzij je van plan bent geen gebruik meer
								te maken van de Services, momenteel niet geregistreerd bent voor een evenement,
								momenteel geen evenement organiseert en geen mededelingen meer hoeft te ontvangen van
								ons of via ons systeem. Zelfs nadat je gekozen hebt voor een 'opt-out' voor het
								ontvangen van mededelingen, blijven wij je Persoonsgegevens en Niet-persoonsgegevens
								bewaren conform dit Privacybeleid. We gebruiken de gegevens echter niet langer om
								contact met je op te nemen. Organisatoren die jouw Persoonsgegevens hebben ontvangen
								conform dit Privacybeleid kunnen die Persoonsgegevens nog steeds gebruiken om contact
								met je op te nemen overeenkomstig hun eigen privacybeleid, maar ze kunnen daarvoor niet
								langer ons systeem gebruiken.
							</p>
							<p>
								<strong>Uitzonderingen:</strong>
							</p>
							<p>
								Dit Privacybeleid geldt niet voor Persoonsgegevens die door ons zijn verzameld anders
								dan de Persoonsgegevens die via de Services zijn verzameld. Dit Privacybeleid geldt niet
								voor gegevens die je ongevraagd hebt verstrekt aan ons of aan een andere gebruiker of
								bezoeker via de Services of op enige andere manier. Dit omvat, maar is niet beperkt tot,
								gegevens die zijn verstrekt in openbare delen van de Services, zoals bulletinboards,
								eventuele ideeën voor nieuwe producten of aanpassingen aan bestaande producten, brieven
								met claims of verzoeken, kennisgevingen van de Digital Millennium Copyright Act en
								andere ongevraagde informatie (tezamen, "Ongevraagde gegevens"). Alle Ongevraagde
								gegevens worden als niet-vertrouwelijk beschouwd en mogen door ons worden
								gereproduceerd, gebruikt, openbaar gemaakt, gedistribueerd en geëxploiteerd zonder
								beperking of naamsvermelding.
							</p>
							<p>
								<strong>Kinderen:</strong>
							</p>
							<p>
								Wij verzamelen niet bewust Persoonsgegevens van kinderen jonger dan 13. Als je jonger
								dan 13 bent, vragen we je om geen Persoonsgegevens te verstrekken via de Services. We
								stimuleren ouders en wettelijke vertegenwoordigers om het internetgebruik van hun
								kinderen te monitoren en ons te helpen bij het toepassen van ons Privacybeleid door hun
								kinderen te instrueren nooit Persoonsgegevens te verstrekken via de Services zonder hun
								toestemming. Als je redenen hebt om aan te nemen dat een kind jonger dan 13
								Persoonsgegevens aan ons heeft verstrekt via de Services, contact met ons op, waarna wij
								zullen proberen die gegevens uit onze databases te verwijderen.
							</p>
							<p>
								<strong>Koppelingen naar andere websites:</strong>
							</p>
							<p>
								Dit Privacybeleid geldt alleen voor de Services. De Services kunnen koppelingen bevatten
								naar andere websites die niet door ons worden beheerd (de "Sites van derden"). Het
								beleid en de procedures die hier worden beschreven, zijn niet van toepassing op de Sites
								van derden. De koppelingen vanuit de Services betekenen niet dat wij de Sites van derden
								steunen of hebben bekeken. Wij stellen voor om direct contact op te nemen met die sites
								voor informatie over hun privacybeleid.
							</p>
							<p>
								<strong>Opslag en beveiliging:</strong>
							</p>
							<p>
								Wij kunnen Persoonsgegevens zelf opslaan of dergelijke gegevens opnemen in databases die
								eigendom zijn van en beheerd worden door onze partners, agenten of serviceproviders. Wij
								ondernemen in onze ogen redelijke stappen om de Persoonsgegevens die via de Services
								worden verstrekt te beschermen tegen verlies, misbruik, ongeoorloofde toegang,
								onbedoelde openbaarmaking, verandering en vernietiging. Geen enkele verzending via
								internet of e-mail is echter ooit volledig veilig of foutloos. Met name e-mail die naar
								of van de Services wordt verstuurd, kan onveilig zijn. Daarom moet je altijd zorgvuldig
								nadenken over welke gegevens je via e-mail aan ons verstuurt. Houd hiermee rekening
								wanneer je Persoonsgegevens via internet openbaar maakt.
							</p>
							<p>
								<strong>Internationale privacywetgeving:</strong>
							</p>
							<p>
								Als je onze website bezoekt of een van onze softwaretoepassingen gebruikt vanuit een
								ander land dan de Verenigde Staten, realiseer je dan dat je gegevens verstuurt
								(inclusief Persoonsgegevens) naar de Verenigde Staten, waar onze servers zich bevinden.
								Wij gaan met je Persoonsgegevens en Niet-persoonsgegevens om overeenkomstig de
								privacywetgeving van de Verenigde Staten en dit Privacybeleid. Houd er rekening mee dat
								de privacywetgeving in de Verenigde Staten mogelijk anders is, en in sommige gevallen
								minder streng, dan de privacywetgeving in je eigen land.
							</p>
							<p>
								<strong>Veranderingen in dit Privacybeleid:</strong>
							</p>
							<p>
								De Services en onze bedrijfsvoering kunnen van tijd tot tijd veranderen. Daardoor kan
								het soms noodzakelijk zijn veranderingen aan te brengen in dit Privacybeleid. Wij
								behouden ons het recht voor dit Privacybeleid op elk moment bij te werken of te wijzigen
								door een nieuwe versie van dit Privacybeleid op onze websites te publiceren. Lees dit
								Privacybeleid regelmatig door, vooral voordat je Persoonsgegevens verstrekt. Dit
								Privacybeleid is voor het laatst bijgewerkt op de hierboven aangegeven datum. Als je
								gebruik blijft maken van de Services nadat er wijzigingen of herzieningen aan dit
								Privacybeleid zijn aangebracht, stem je daarmee in met de voorwaarden van het gewijzigde
								Privacybeleid.
							</p>
							<p>
								<strong>Toegang tot gegevens:</strong>
							</p>
							<p>
								Organisatoren kunnen hun Persoonsgegevens die door ons zijn opgeslagen, bekijken en
								bijwerken door in te loggen en naar de pagina Mijn account te gaan. Organisatoren kunnen
								ook rechtstreeks contact met ons opnemen op onderstaand adres met betrekking tot
								Persoonsgegevens die niet toegankelijk zijn via de pagina Mijn acount. Kopers en andere
								niet-Organisatoren hebben geen formeel account bij Star-Tracking. Je kunt echter een
								formeel account maken door je aan te melden. Na aanmelding kun je op de pagina Mijn
								account je Persoonsgegevens bekijken en bijwerken. Kopers en andere niet-Organisatoren
								kunnen via onderstaand adres ook rechtstreeks contact met ons opnemen met het verzoek om
								Persoonsgegevens bij te werken. We zullen er al het redelijke aan doen om binnen 30
								dagen te reageren op verzoeken met betrekking tot Persoonsgegevens. We kunnen echter
								verzoeken afwijzen die naar onze mening onredelijk (dat wil zeggen, buitensporige
								inspanningen of aanzienlijke wijzigingen van onze informatiesystemen vereisen),
								onpraktisch of ongegrond zijn (dat wil zeggen, herhaalde verzoeken, verzoeken die te
								kwader trouw zijn of verzoeken die informatie van derden aantast). Je hebt mogelijk geen
								toegang tot Niet-persoonsgegevens, die veelal geaggregeerd worden opgeslagen, of niet de
								mogelijkheid om deze bij te werken.
							</p>
							<p>
								<strong>Bewaring en verwijdering:</strong>
							</p>
							<p>
								We bewaren je Persoonsgegevens zo lang als jij de Services blijft gebruiken. Je kunt je
								account sluiten door contact met ons op te nemen. We bewaren Persoonsgegevens en
								Niet-persoonsgegevens mogelijk gedurende een aanvullende periode voor zover dit is
								toegestaan of vereist door van toepassing zijnde wetgeving. Zelfs als we je
								Persoonsgegevens verwijderen, kunnen deze blijven bestaan op back-up- of archiefmedia en
								andere informatiesystemen.
							</p>
							<p>
								<strong>Contact opnemen met Star-Tracking:</strong>
							</p>
							<p className="policy-end-text">
								Neem gerust contact met ons op als je vragen hebt over dit Privacybeleid of onze
								informatiepraktijken. Je kunt ons mailen via http://www.startracking.be/contact.
							</p>
							<Link to="/newevent">
								<button type="button" className="btn btn-red btn-create-event">
									{t('Maak nu jouw event aan')}
								</button>
							</Link>
						</div>
					</div>
				</div>
				<Withwork />
			</div>
		);
	}
}
export default translate('translations')(Policy);
