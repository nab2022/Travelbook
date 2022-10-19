import Header from "../ElementsPage/Header";
import Footer from "../ElementsPage/Footer";
import Menu from "../ElementsPage/Menu";
import "./PageModifProfile.css";
import { useEffect, useState } from "react";

function PageProfil() {
	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		ID: "",
	});

	function profilChange(e) {
		setUser({
			// sortir user (tableau des donnes) par ... deviser en morceaux   par "," écraser ancien par nouveau valeur et lu renvoyer au server ...
			// par button valider (cree une function avec méthode PUT user et ont selection  BODY a utiliser aux choix)
			...user,
			// écraser = mise a jour last name
			lastname: e.target.value,
			firstname: e.target.value,
			email: e.target.value,
		});
	}

	function setNewProfil(e) {
		async function setProfil() {
			const token = localStorage.getItem("token");
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `bearer ${token}`,
				},
				body: JSON.stringify({
					email: email,
					firstname: firstname,
					lastname: lastname,
				}),
			};
			const response = await fetch(
				"https://social-network-api.osc-fr1.scalingo.io/TravelBook/user",
				options
			);
			const data = await response.json();
			const ID = data._id;
			const firstname = data.firstname;
			const lastname = data.lastname;
			const email = data.email;
			setUser({
				firstname: firstname,
				lastname: lastname,
				email: email,
				ID: ID,
			});
		}
		/* const data = await response.json();
			const ID = data._id;
			const firstname = data.firstname;
			const lastname = data.lastname;
			const email = data.email;
			setUser({
				firstname: firstname,
				lastname: lastname,
				email: email,
				ID: ID,
			});
		}
		useEffect(() => {
			setProfil();
		}, []); */
	}
	/// méthode PUT ont ajoute body

	async function getProfil() {
		const token = localStorage.getItem("token");
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${token}`,
			},
		};
		const response = await fetch(
			"https://social-network-api.osc-fr1.scalingo.io/TravelBook/user",
			options
		);
		const data = await response.json();
		const ID = data._id;
		const firstname = data.firstname;
		const lastname = data.lastname;
		const email = data.email;
		setUser({ firstname: firstname, lastname: lastname, email: email, ID: ID });
	}
	useEffect(() => {
		getProfil();
	}, []);
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
					<h1>Modifier Votre Profil</h1>
					<section className="ModifUser">
						<p>
							Nom :
							<input
								type="text"
								placeholder="Select new lastname"
								value={user.lastname}
								onChange={profilChange}
							/>
						</p>
						<p>
							Prénom :
							<input
								type="text"
								placeholder="Select new fisrtname"
								value={user.firstname}
								onChange={profilChange}
							/>
						</p>
						<p>
							Email :
							<input
								type="text"
								placeholder="Select new email"
								value={user.email}
								onChange={profilChange}
							/>
						</p>
					</section>
					<button className="BtnValider" onClick={setNewProfil}>
						Valider
					</button>
				</section>
			</div>
			<section className="SectionFooter">
				<Footer />
			</section>
		</div>
	);
}

export default PageProfil;