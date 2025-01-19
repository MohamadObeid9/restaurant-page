export const menu = () => {
  const div = document.createElement("div");
  div.classList.add("p-5");

  const menu = document.createElement("ul");
  menu.textContent = "Our Menu Contains :";
  menu.classList.add("text-3xl", "mb-4", "text-yellow-400", "font-bold");
  div.appendChild(menu);

  const tabouleh = document.createElement("li");
  tabouleh.classList.add("text-slate-900", "text-lg");
  tabouleh.textContent = "Tabbouleh";
  const fattoush = document.createElement("li");
  fattoush.classList.add("text-slate-900", "text-lg");
  fattoush.textContent = "Fattoush";
  const kebbeh = document.createElement("li");
  kebbeh.classList.add("text-slate-900", "text-lg");
  kebbeh.textContent = "Kebbeh";
  const kefta = document.createElement("li");
  kefta.classList.add("text-slate-900", "text-lg");
  kefta.textContent = "Kefta";
  const hummus = document.createElement("li");
  hummus.classList.add("text-slate-900", "text-lg");
  hummus.textContent = "Hummus";
  const fatteh = document.createElement("li");
  fatteh.classList.add("text-slate-900", "text-lg");
  fatteh.textContent = "Fatteh";
  const Foul = document.createElement("li");
  Foul.classList.add("text-slate-900", "text-lg");
  Foul.textContent = "Foul";
  const babaGhanouj = document.createElement("li");
  babaGhanouj.classList.add("text-slate-900", "text-lg");
  babaGhanouj.textContent = "Baba Ghanouj";
  const WarakInab = document.createElement("li");
  WarakInab.classList.add("text-slate-900", "text-lg");
  WarakInab.textContent = "Warak Inab";
  const Tawouk = document.createElement("li");
  Tawouk.classList.add("text-slate-900", "text-lg");
  Tawouk.textContent = "Tawouk";
  div
    .appendChild(tabouleh)
    .appendChild(fattoush)
    .appendChild(kebbeh)
    .appendChild(kefta)
    .appendChild(hummus)
    .appendChild(fatteh)
    .appendChild(Foul)
    .appendChild(babaGhanouj)
    .appendChild(WarakInab)
    .appendChild(Tawouk);
  return div;
};
