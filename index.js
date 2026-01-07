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
  const content = item.querySelector(".srv-acc-content");
  content.style.maxHeight = "0";

  const icon = item.querySelector(".srv-acc-icon");
  const title = item.querySelector(".srv-acc-title");

  icon.classList.add("rotate-180");
  icon.classList.remove(srvActiveColor);
  icon.classList.add(srvInactiveColor);

  title.classList.remove(srvActiveColor);
  title.classList.add(srvInactiveColor);
}

function setSrvActive(item) {
  item.dataset.srvActive = "true";
  const content = item.querySelector(".srv-acc-content");
  
  // Calculate actual content height for smooth animation
  content.style.maxHeight = content.scrollHeight + "px";

  const icon = item.querySelector(".srv-acc-icon");
  const title = item.querySelector(".srv-acc-title");

  icon.classList.remove("rotate-180");
  icon.classList.remove(srvInactiveColor);
  icon.classList.add(srvActiveColor);

  title.classList.remove(srvInactiveColor);
  title.classList.add(srvActiveColor);
}

// Initialize accordions on page load
function initSrvAccordions() {
  srvAccordions.forEach((item) => {
    if (item.dataset.srvActive === "true") {
      setSrvActive(item);
    } else {
      setSrvInactive(item);
    }
  });
}

// Add click event listeners
srvAccordions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.srvActive === "true") return;
    srvAccordions.forEach((acc) => setSrvInactive(acc));
    setSrvActive(item);
  });
});

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", initSrvAccordions);

// Handle window resize for content height recalculation
window.addEventListener("resize", () => {
  srvAccordions.forEach((item) => {
    if (item.dataset.srvActive === "true") {
      const content = item.querySelector(".srv-acc-content");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});