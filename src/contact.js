import { component } from "./index.js";

function contact() {
	const contactPage = component(
		"div",
		undefined,
		["contact__page"],
		"contact-page"
	);

	const contactTitle = component(
		"h1",
		"Contact",
		["contact__title"],
		"contact-title"
	);

	const contactText = component(
		"p",
		"Contact us at 123 Main St. in the heart of the city. We are open from 8am to 10pm every day. We hope to see you soon!",
		["contact__text"],
		"contact-text"
	);

	contactPage.appendChild(contactTitle);
	contactPage.appendChild(contactText);

	return contactPage;
}

export { contact };
