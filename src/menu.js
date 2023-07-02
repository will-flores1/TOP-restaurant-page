import { component } from "./index.js";

function menu() {
	const menuPage = component("div", undefined, ["menu__page"], "menu-page");

	const menuTitle = component("h1", "Menu", ["menu__title"], "menu-title");

	const menuText = component(
		"p",
		"Our menu is the best in the world. We have the best food and the best service. Come and visit us! We are located at 123 Main St. in the heart of the city. We are open from 8am to 10pm every day. We hope to see you soon!",
		["menu__text"],
		"menu-text"
	);

	menuPage.appendChild(menuTitle);
	menuPage.appendChild(menuText);

	return menuPage;
}

export { menu };
