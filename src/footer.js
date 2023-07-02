import { component } from "./index.js";

function footer() {
	const footer = component("footer", undefined, ["footer"], "footer");

	const footerText = component(
		"p",
		"",
		["footer__text"],
		"footer-text",
		"Made by <a href='https://wilfredoflores.dev'>Wilfredo Flores</a>"
	);

	footer.appendChild(footerText);

	return footer;
}

export { footer };
