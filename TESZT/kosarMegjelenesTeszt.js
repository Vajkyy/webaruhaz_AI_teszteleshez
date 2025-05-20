import Kosar from "../PUBLIC/Kosar.js";

function kosarMegjelenesReszletesTeszt() {
  const lista = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
      mennyiseg: 3,
    },
    {
      id: 1,
      nev: "Termék 2",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
      mennyiseg: 1,
    },
  ];

  const szuloElem = document.createElement("div");
  szuloElem.classList.add("kosartarolo");

  new Kosar(lista, szuloElem);

  const sorok = szuloElem.querySelectorAll("tbody tr");
  console.assert(sorok.length === lista.length, `Nem a várt sorok száma: várt ${lista.length}, kaptál ${sorok.length}`);

  lista.forEach((termek, index) => {
    const sor = sorok[index];

    const cellak = sor.querySelectorAll("td");

    console.assert(cellak[1].textContent === termek.nev, `Termék név nem egyezik index: ${index}`);
    console.assert(cellak[2].textContent === termek.ar + " Ft", `Termék ár nem egyezik index: ${index}`);

    const mennyisegSzoveg = cellak[3].textContent.trim();
    const mennyisegSzam = Number(mennyisegSzoveg.replace(/[^0-9]/g, ""));
    console.assert(mennyisegSzam === termek.mennyiseg, `Mennyiség nem egyezik index: ${index}`);

    const novelGomb = cellak[3].querySelector("button.novel");
    const csokkentGomb = cellak[3].querySelector("button.csokkent");
    const torlesGomb = cellak[4].querySelector("button.torles");

    console.assert(novelGomb !== null, `Növelés gomb hiányzik index: ${index}`);
    console.assert(csokkentGomb !== null, `Csökkentés gomb hiányzik index: ${index}`);
    console.assert(torlesGomb !== null, `Törlés gomb hiányzik index: ${index}`);

    console.assert(novelGomb.dataset.id == termek.id, `Növelés gomb data-id nem egyezik index: ${index}`);
    console.assert(csokkentGomb.dataset.id == termek.id, `Csökkentés gomb data-id nem egyezik index: ${index}`);
    console.assert(torlesGomb.dataset.id == termek.id, `Törlés gomb data-id nem egyezik index: ${index}`);
  });

  console.log("Lefutott a kosarMegjelenesReszletesTeszt");
}

kosarMegjelenesReszletesTeszt();
