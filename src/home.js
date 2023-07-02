import { component } from "./index.js";

function home() {
	const homePage = component("div", undefined, ["home__page"], "home-page");

	const homeTitle = component(
		"h1",
		"The Best Restaurant",
		["home__title"],
		"home-title"
	);
	// generate text content
	const homeText = component(
		"p",
		"This is the best restaurant in the world. We have the best food and the best service. Come and visit us! We are located at 123 Main St. in the heart of the city. We are open from 8am to 10pm every day. We hope to see you soon!",
		["home__text"],
		"home-text"
	);

	homePage.appendChild(homeTitle);
	homePage.appendChild(homeText);

	return homePage;
}

export { home };
