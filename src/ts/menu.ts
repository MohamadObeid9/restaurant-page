import { createList } from "./createList";

// Function to create and return a menu div element
export const menu = () => {
  // Create a div element and add padding class
  const div = document.createElement("div");
  div.classList.add("p-5");

  // Create a menu list and set its text and classes
  const menu = document.createElement("ul");
  menu.textContent = "Our Menu Contains :";
  menu.classList.add("text-3xl", "mb-4", "text-yellow-400", "font-bold");
  div.appendChild(menu);

  // Create menu items with their respective classes and text content
  const tabouleh = createList("tabouleh");
  const fattoush = createList("fattoush");
  const kebbeh = createList("kebbeh");
  const kefta = createList("kefta");
  const hummus = createList("hummus");
  const fatteh = createList("fatteh");
  const Foul = createList("Foul");
  const babaGhanouj = createList("babaGhanouj");
  const WarakInab = createList("WarakInab");
  const Tawouk = createList("Tawouk");

  // Append all menu items to the menu list
  menu.appendChild(tabouleh);
  menu.appendChild(fattoush);
  menu.appendChild(kebbeh);
  menu.appendChild(kefta);
  menu.appendChild(hummus);
  menu.appendChild(fatteh);
  menu.appendChild(Foul);
  menu.appendChild(babaGhanouj);
  menu.appendChild(WarakInab);
  menu.appendChild(Tawouk);

  // Return the div containing the menu
  return div;
};
