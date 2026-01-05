const accordions = document.querySelectorAll(".accordion-item");
const activeColor = "text-[#EF815E]";
const inactiveColor = "text-gray-500";

function setInactive(acc) {
  acc.dataset.active = "false";
  acc.querySelector(".accordion-content").style.maxHeight = "0";

  const icon = acc.querySelector(".accordion-icon");
  const number = acc.querySelector(".accordion-number");
  const title = acc.querySelector(".accordion-title");

  icon.classList.add("rotate-180");
  icon.classList.remove(activeColor);
  icon.classList.add(inactiveColor);

  number.classList.remove(activeColor);
  number.classList.add(inactiveColor);

  title.classList.remove(activeColor);
  title.classList.add(inactiveColor);
}

function setActive(acc) {
  acc.dataset.active = "true";
  acc.querySelector(".accordion-content").style.maxHeight = "500px";

  const icon = acc.querySelector(".accordion-icon");
  const number = acc.querySelector(".accordion-number");
  const title = acc.querySelector(".accordion-title");

  icon.classList.remove("rotate-180");
  icon.classList.remove(inactiveColor);
  icon.classList.add(activeColor);

  number.classList.remove(inactiveColor);
  number.classList.add(activeColor);

  title.classList.remove(inactiveColor);
  title.classList.add(activeColor);
}

accordions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.active === "true") return;

    accordions.forEach((acc) => setInactive(acc));
    setActive(item);
  });
});
