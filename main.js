const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

  });
});

// $(document).ready(function(){
//       $(".menu-toggle").click(function(){
//         $(".tabs").toggle(500);
//       });
//     });

// document.querySelectorAll(".overlay").forEach(card => {
//   card.addEventListener("click", () => {
//     const link = card.getAttribute("data-link");
//     window.open(link, "_blank");
//   });
// });



const menuToggle = document.querySelector(".menu-toggle");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("sidebarOverlay");
const tab = document.getElementById("sidebarOverlay");

menuToggle.addEventListener("click", () => {
    mobileSidebar.classList.add("active");
    overlay.classList.add("active");
});

closeSidebar.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
    mobileSidebar.classList.remove("active");
    overlay.classList.remove("active");
}