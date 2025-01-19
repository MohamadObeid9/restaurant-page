import { home as homePage } from "./home";
import { menu as menuPage } from "./menu";
import { location as locationPage } from "./location";

export const LoadPage = () => {
  // Header Section
  const header = document.createElement("div");
  header.classList.add(
    "h-[20%]",
    "w-[80%]",
    "mx-2",
    "border-b-2",
    "flex",
    "justify-center",
    "items-end"
  );
  document.body.appendChild(header);

  // Home button
  const home = document.createElement("div");
  home.textContent = "HomePage";
  home.classList.add(
    "tracking-wider",
    "text-center",
    "w-[30%]",
    "p-3",
    "text-2xl",
    "text-yellow-500",
    "font-bold",
    "hover:bg-fuchsia-400",
    "hover:text-blue-600",
    "hover:rounded-t-md"
  );
  header.appendChild(home);
  home.addEventListener("click", () => {
    container.textContent = "";
    container.appendChild(homePage());
  });

  // Menu button
  const menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.classList.add(
    "tracking-wider",
    "text-center",
    "w-[30%]",
    "p-3",
    "text-2xl",
    "text-yellow-500",
    "font-bold",
    "hover:bg-fuchsia-400",
    "hover:text-blue-600",
    "hover:rounded-t-md"
  );
  header.appendChild(menu);
  menu.addEventListener("click", () => {
    container.textContent = "";
    container.appendChild(menuPage());
  });

  // Location button
  const location = document.createElement("div");
  location.textContent = "Location";
  location.classList.add(
    "tracking-wider",
    "text-center",
    "w-[30%]",
    "p-3",
    "text-2xl",
    "text-yellow-500",
    "font-bold",
    "hover:bg-fuchsia-400",
    "hover:text-blue-600",
    "hover:rounded-t-md"
  );
  header.appendChild(location);
  location.addEventListener("click", () => {
    container.textContent = "";
    container.appendChild(locationPage());
  });

  // Load home page by default on window load
  window.onload = () => container.appendChild(homePage());

  // Main Section
  const container = document.createElement("div");
  container.classList.add(
    "bg-fuchsia-500",
    "w-1/2",
    "h-1/2",
    "rounded-lg",
    "my-auto"
  );
  document.body.appendChild(container);
};
