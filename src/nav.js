import "./styles/main.scss";
import { component } from "./index.js";

const navItems = ["Home", "Menu", "Contact"];

function activeClass(tab) {
	const arr = tab === "Home" ? ["nav__link", "active"] : ["nav__link"];

	return arr;
}

function nav() {
	const nav = component("nav", undefined, ["nav"], "nav");

	const navList = component("ul", undefined, ["nav__list"], "nav-list");

	for (let i = 0; i < navItems.length; i++) {
		const navItem = component("li", undefined, ["nav__item"], `nav-item-${i}`);
		const navLink = component(
			"a",
			navItems[i],
			activeClass(navItems[i]),
			navItems[i]
		);

		navItem.appendChild(navLink);
		navList.appendChild(navItem);
	}

	nav.appendChild(navList);

	return nav;
}

export { nav };
