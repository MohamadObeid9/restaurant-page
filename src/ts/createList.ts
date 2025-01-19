export const createList = (element: string): HTMLElement => {
  const li = document.createElement("li");
  li.classList.add("text-slate-900", "text-lg");
  li.textContent = element.toUpperCase();

  return li;
};
