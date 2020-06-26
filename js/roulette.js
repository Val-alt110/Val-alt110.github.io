var cheat_meals = [
  { Name: "Pasticceria linari", Url: "https://pasticcerialinari.com/" },
  { Name: "Made bakery", Url: "http://madebakery.com/" },
  { Name: "Pasticceria salentina", Url: "https://www.pasticceriasalentina.it/" },
  {
    Name: "Pasticceria regoli",Url: "http://www.pasticceriaregoli.com/",
  },
  { Name: "Andrea de Bellis", Url: "http://www.andreadebellis.it/It/HomePage.aspx" },
  { Name: "Le Levain", Url: "http://www.lelevainroma.it/" },
  { Name: "La Portineria", Url: "https://www.laportineria.it/" },
  { Name: "Bakery House", Url: "http://www.bakeryhouse.it/" },
  { Name: "Andreotti Roma", Url: "https://www.andreottiroma.it/" },

];

const rouletteContainer = document.querySelector(".roulette-container");
const roulette = document.querySelector(".roulette");
const linkTo = document.querySelector(".link-to");
const spin = document.querySelector(".spin");
spin.addEventListener("click", () => {
  rouletteContainer.classList.remove("tada");
  const total = cheat_meals.length;
  const selected = Math.floor(Math.random() * total);
  for (let i = 0; i <= total; i++) {
    setTimeout(
      ((i) => {
        return () => {
          roulette.innerText = cheat_meals[i % total].Name;
          linkTo.href = cheat_meals[i % total].Url;
          if (i === selected) {
            roulette.classList.add("tada");
          }
        };
      })(i),
      i * 100
    );
    if (i === selected) {
      break;
    }
  }
});
