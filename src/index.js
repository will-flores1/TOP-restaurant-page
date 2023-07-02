import "./styles/main.scss";

import { nav } from "./nav.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import { footer } from "./footer.js";

const body = document.querySelector("body");

function component(type, text, className, id, innerHTML) {
	const element = document.createElement(type);
	element.textContent = text;
	className.forEach((name) => element.classList.add(name));
	element.id = id;
	innerHTML ? (element.innerHTML = innerHTML) : null;

	return element;
}

const content = component("div", undefined, ["content"], "content");

body.appendChild(nav());
body.appendChild(content);
content.appendChild(home());
body.appendChild(footer());

const app = document.querySelector("#content");

function switchTab(tab, page) {
	app.textContent = "";
	app.appendChild(page);
	navItems.forEach((item) => item.classList.remove("active"));
	tab.classList.add("active");
}

const handleClick = (e) => {
	const tab = e.target.textContent;

	switch (tab) {
		case "Home":
			switchTab(e.target, home());
			break;
		case "Menu":
			switchTab(e.target, menu());
			break;
		case "Contact":
			switchTab(e.target, contact());
			break;
	}
};

const navItems = document.querySelectorAll(".nav__link");
navItems.forEach((item) => {
	item.addEventListener("click", handleClick);
});

export { component };
