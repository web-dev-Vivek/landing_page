// Timeline intro animation
let tl = gsap.timeline();

tl.from("#card1", {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out",
});

tl.from("#card2", {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out",
});

tl.from("#card3", {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out",
});

tl.from("#card4", {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: "power2.out",
});

function GSAP(el) {
  document.querySelectorAll(".card").forEach((card) => {
    if (card.classList.contains("z-[99]")) {
      card.classList.remove("z-[99]");
    }
  });

  var tl = gsap.timeline();
  tl.from(el, {
    rotation: 110,
    opacity: 1,
    duration: 1,
    ease: "linear",
    transformOrigin: "top center",
  });
  tl.call(
    () => {
      el.classList.add("z-[99]");
    },
    null,
    "+=0.1"
  );
}
