const createHeader = (function () {
  const h1 = document.createElement("h1");
  h1.textContent = "Malak Al Tawook";
  h1.classList.add("title");
  document.body.appendChild(h1);

  const header = document.createElement("div");
  header.classList.add("headerContainer");
  document.body.appendChild(header);

  const about = document.createElement("button");
  about.textContent = "About";
  about.classList.add("headerButton");
  header.appendChild(about);

  const menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.classList.add("headerButton");
  header.appendChild(menu);

  const contact = document.createElement("button");
  contact.textContent = "Contact";
  contact.classList.add("headerButton");
  header.appendChild(contact);

  return { about, menu, contact };
})();

const createContainer = (function () {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  const about = createHeader.about;
  const menu = createHeader.menu;
  const contact = createHeader.contact;
  about.addEventListener("click", () => aboutContent(container));
  menu.addEventListener("click", () => menuContent(container));
  contact.addEventListener("click", () => contactContent(container));
})();

const aboutContent = (parent: HTMLElement) => {

  const content = document.createElement("div");
  content.classList.add("content");
  parent.appendChild(content);

  const h1 = document.createElement("h1");
  h1.textContent = "Who We Are ?";
  content.appendChild(h1);

  const introPara = document.createElement("span");
  introPara.textContent =
    "Malak al Tawouk Restaurant is the most popular Tawouk restaurant chain, specializing in original recipes, providing Professional management and offering great service.";
  content.appendChild(introPara);

  const quote = document.createElement("p");
  quote.textContent =
    '"EVERY DAY, THOUSANDS OF CUSTOMERS ARE SERVED AROUND OUR POPULAR CHAINS."';
  content.appendChild(quote);

};

const menuContent = (parent: HTMLElement) => {
  const content = document.createElement("div");
  content.classList.add("content");
  parent.appendChild(content);
};
const contactContent = (parent: HTMLElement) => {
  const content = document.createElement("div");
  content.classList.add("content");
  parent.appendChild(content);
};
