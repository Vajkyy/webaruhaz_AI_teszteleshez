import Kosar from "../PUBLIC/Kosar.js";
function kosarMegjelenesTeszt() {
  const lista = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    },
    {
      id: 1,
      nev: "Termék 2",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    },
  ];
  const szuloElem = document.createElement("div");
  szuloElem.classList.add("kosartarolo");
  const kosar = new Kosar(lista, szuloElem);
  const tablazatSorElemek = document.querySelectorAll("tr");
  console.assert(tablazatSorElemek.length===3, "Nem stimmel a táblázat sorainak a száma");
  console.log("Lefutott a kosarMegjelenesTeszt")
}
kosarMegjelenesTeszt();
