
      const nav = document.getElementById("nav");
      const fabars = document.querySelector(".fa-bars");
      const faxmark = document.querySelector(".fa-xmark");
      const dropdown = document.querySelector(".my-dropdown");
      const ddTrigger = document.querySelector(".dd-trigger");
      const header = document.querySelector("header");
      const nav_links = document.querySelectorAll(".nav-link");
      const boxes = document.querySelectorAll(".hover-scale");
      let opncls = true;
      faxmark.style.display = "none";
      window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      });

      let lastHoveredBox = null;

      boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
          // 1. Əvvəl bütün box-ları normal ölçüyə qaytar
          boxes.forEach((b) => (b.style.transform = "scale(1)"));

          // 2. Hover olunan box-u böyüt
          box.style.transform = "scale(1.1)";

          // 3. Son hover olunan box-u yadda saxla
          lastHoveredBox = box;
        });
      });

      function trigger() {
        dropdown.classList.toggle("active");
        ddTrigger.classList.toggle("active");
      }
      function clickbar() {
        if (opncls) {
          nav.classList.add("classy-nav");
          nav.style.transform = "translateX(0)";
          fabars.style.display = "none";
          faxmark.style.display = "block";
          opncls = false;
        } else {
          fabars.style.display = "block";
          faxmark.style.display = "none";
          nav.style.transform = "translateX(-100%)";
          nav.classList.remove("classy-nav");
          opncls = true;
        }
      }
   