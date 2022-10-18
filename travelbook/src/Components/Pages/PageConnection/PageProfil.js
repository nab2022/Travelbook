import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./PageProfil.css";

function PageProfil() {
	return (
		<div className="Visuel">
			<section className="SectionHeader">
				<Header />
			</section>
			<div className="PartieCentre">
				<section className="SectionMenu">
					<Menu />
				</section>

				<section className="SectionMain">
					<h1>TravelBook</h1>
					<h1>Votre Profil</h1>
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
}

export default PageProfil;
