export const location = () => {
  // Create a div element to hold the location information
  const div = document.createElement("div");

  // Create a header element for the location title
  const header = document.createElement("h1");
  header.textContent = "OUR LOCATION :";
  header.classList.add(
    "text-3xl",
    "text-center",
    "font-bold",
    "text-yellow-400",
    "m-10"
  );
  div.appendChild(header);

  // Create a paragraph element for the location address
  const para = document.createElement("p");
  para.textContent =
    "We are located at 4051 Maple St . Location:Loon Lake, Washington(WA), 99148";
  para.classList.add("mx-20", "text-lg", "italic");
  div.appendChild(para);

  // Return the div containing the location information
  return div;
};
