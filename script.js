/*document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "pink";

  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1000);
});*/
// Pulse flash on page load
/*document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("pulse-flash");

  // Remove the class after the animation finishes
  setTimeout(() => {
    document.body.classList.remove("pulse-flash");
  }, 400); // matchar CSS-animationens längd
});*/
document.addEventListener("DOMContentLoaded", () => {
  // Start: pulse flash
  document.body.classList.add("pulse-flash");

  // Remove pulse after animation
  setTimeout(() => {
    document.body.classList.remove("pulse-flash");

    // Trigger stuttering fade-out
    document.body.classList.add("stutter-flash");

    // Remove stutter class after it's done
    setTimeout(() => {
      document.body.classList.remove("stutter-flash");
    }, 600); // matchar CSS-längden
  }, 400);
});
