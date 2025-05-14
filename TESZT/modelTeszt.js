import Model from "../PUBLIC/Model.js";
import { termekLista } from "../PUBLIC/termekLista.js";

function addKosarTeszt_egyTermekEgyszer() {
  const model = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };

  model.addKosar(termek);
  const kosarlista = model.getKosarLista();
  console.assert(
    JSON.stringify(kosarlista[0]) === JSON.stringify(termek),
    "hiba: nem egyezik a kosár tartalma"
  );
  console.log("Lefutott az ddKosarTeszt_egyTermekEgyszer");
}
addKosarTeszt_egyTermekEgyszer();

/* ua a termék kétszer */
function addKosarTeszt_egyTermekKetszerTeszt() {
  const model = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  model.addKosar(termek);
  model.addKosar(termek);
  const ujtermek = { ...termek };
  ujtermek.mennyisege = 2;
  const kosarlista = model.getKosarLista();
  console.assert(
    JSON.stringify(
      termekLista[0] === JSON.stringify(ujtermek),
      kosarlista[0],
      ujtermek
    )
  );
  console.log("Lefutott az addKosarTeszt_egyTermekKetszerTeszt");
}
addKosarTeszt_egyTermekKetszerTeszt();

function removeKosarItemTeszt() {
  const model = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  model.addKosar(termek);
  model.removeKosarItem(0);
  const kosarlista = model.getKosarLista();
  console.assert(
    kosarlista.length === 0,
    "Hiba: a termék törlése nem sikerült."
  );
  console.log("Lefutott a removeKosarItemTeszt");
}
removeKosarItemTeszt();

function increaseQuantityTeszt() {
  const model = new Model();
  const termek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  model.addKosar(termek);
  model.increaseQuantity(0);
  const kosarLista = model.getKosarLista();
  console.assert(
    kosarLista.length === 1,
    "Hiba, nem jól adja hozzá az értékeket a termék mennyiségéhez"
  );
  console.log("Lefutott az increaseQuantityTeszt");
}
increaseQuantityTeszt();

function decreaseQuantityTeszt() {
  const model = new Model();
  const termek = {
    id: 4,
    nev: "Termék 4",
    ar: 1200,
    kep: "./kepek/placeholder.jpg",
    leiras: "Leírás 4",
  };

  model.addKosar(termek); // mennyiség = 1
  model.increaseQuantity(4); // mennyiség = 2
  model.decreaseQuantity(4); // mennyiség = 1
  model.decreaseQuantity(4); // eltávolítja a kosárból

  const kosarlista = model.getKosarLista();

  console.assert(
    kosarlista.length === 0,
    "hiba: a terméknek el kellett volna tűnnie a kosárból"
  );
  console.log("Lefutott a decreaseQuantityTeszt");
}
decreaseQuantityTeszt();
function decreaseQuantityTeszt2() {
    const model = new Model();
    const termek = {
      id: 4,
      nev: "Termék 4",
      ar: 1200,
      kep: "./kepek/placeholder.jpg",
      leiras: "Leírás 4",
    };
  
    model.addKosar(termek); // mennyiség = 1
    model.increaseQuantity(4); // mennyiség = 2
    model.increaseQuantity(4); // mennyiség = 1
  
    const kosarlista = model.getKosarLista();
  
    console.assert(
      kosarlista.length === 1,
      "hiba: a terméknek el kellett volna tűnnie a kosárból"
    );
    console.log("Lefutott a decreaseQuantityTeszt2");
  }
  decreaseQuantityTeszt2();