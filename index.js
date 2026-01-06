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

const srvAccordions = document.querySelectorAll(".srv-acc-item");
const srvActiveColor = "text-[#EF815E]";
const srvInactiveColor = "text-gray-500";

function setSrvInactive(item) {
  item.dataset.srvActive = "false";
  item.querySelector(".srv-acc-content").style.maxHeight = "0";

  const icon = item.querySelector(".srv-acc-icon");
  const number = item.querySelector(".srv-acc-number");
  const title = item.querySelector(".srv-acc-title");

  icon.classList.add("rotate-180");
  icon.classList.remove(srvActiveColor);
  icon.classList.add(srvInactiveColor);

  number.classList.remove(srvActiveColor);
  number.classList.add(srvInactiveColor);

  title.classList.remove(srvActiveColor);
  title.classList.add(srvInactiveColor);
}

function setSrvActive(item) {
  item.dataset.srvActive = "true";
  item.querySelector(".srv-acc-content").style.maxHeight = "500px";

  const icon = item.querySelector(".srv-acc-icon");
  const number = item.querySelector(".srv-acc-number");
  const title = item.querySelector(".srv-acc-title");

  icon.classList.remove("rotate-180");
  icon.classList.remove(srvInactiveColor);
  icon.classList.add(srvActiveColor);

  number.classList.remove(srvInactiveColor);
  number.classList.add(srvActiveColor);

  title.classList.remove(srvInactiveColor);
  title.classList.add(srvActiveColor);
}

srvAccordions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.srvActive === "true") return;
    srvAccordions.forEach((acc) => setSrvInactive(acc));
    setSrvActive(item);
  });
});
