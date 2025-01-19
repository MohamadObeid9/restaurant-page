export const home = () => {
  const div = document.createElement("div");
  div.classList.add("py-10");
  const header = document.createElement("h1");
  header.textContent = "Lebanese food";
  header.classList.add(
    "text-center",
    "mb-8",
    "text-yellow-400",
    "font-extrabold",
    "italic",
    "text-3xl",
    "tracking-wider"
  );
  div.appendChild(header);
  const para = document.createElement("p");
  para.textContent =
    "Packed with fresh flavours and textures, Lebanese food is far more than simply tabbouleh and baklava. From hummus and fattoush to falafel and couscous with almonds, Lebanese food is a reflection of the varied history and culture of Lebanon.";
  para.classList.add(
    "mx-auto",
    "text-center",
    "text-sm",
    "w-[70%]",
    "tracking-widest",
    "italic"
  );
  div.appendChild(para);
  return div;
};
