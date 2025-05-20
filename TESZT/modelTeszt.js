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
  model.decreaseQuantity(4); // mennyiség = 0

  const kosarlista = model.getKosarLista();

  console.assert(
    kosarlista.length === 0,
    "hiba: a terméknek el kellett volna tűnnie a kosárból"
  );
  console.log("Lefutott a decreaseQuantityTeszt2");
}
decreaseQuantityTeszt2();

function rendezTermekListaTesztNevSzerintNovekvo() {
  termekLista.length = 0;

  termekLista.push(
    {
      id: 4,
      nev: "Körte",
      ar: 1200,
      kep: "./kepek/placeholder.jpg",
      leiras: "Leírás 4",
    },
    {
      id: 1,
      nev: "Alma",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    }
  );

  const model = new Model();

  model.rendezTermekLista("nevSzerintNovevo");

  const lista = model.getTermekLista();

  console.assert(lista[0].id === 1, "hiba: első elem nem 'Alma'");
  console.assert(lista[1].id === 4, "hiba: második elem nem 'Körte'");

  console.log("Lefutott a rendezTermekListaTesztNevSzerintNovekvo");
}

rendezTermekListaTesztNevSzerintNovekvo();

function rendezTermekListaTesztNevSzerintCsokkeno() {
  termekLista.length = 0;
  // betesszük csak a teszt termékeket
  termekLista.push(
    {
      id: 4,
      nev: "Körte",
      ar: 1200,
      kep: "./kepek/placeholder.jpg",
      leiras: "Leírás 4",
    },
    {
      id: 1,
      nev: "Alma",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    }
  );
  const model = new Model();

  const lista = model.getTermekLista();
  model.rendezTermekLista("nevSzerintCsokkeno");

  //console.log(termekLista);
  console.assert(lista[0].id === 4, "hiba: első elem nem 'körte'");
  console.assert(lista[1].id === 1, "hiba: második elem nem 'alma'");
  console.log("Lefutott a rendezTermekListaTesztNevSzerintCsokkeno");
}

rendezTermekListaTesztNevSzerintCsokkeno();

function rendezTermekListaArSzerintNovekvo() {
  termekLista.length = 0;

  termekLista.push(
    {
      id: 4,
      nev: "Körte",
      ar: 1200,
      kep: "./kepek/placeholder.jpg",
      leiras: "Leírás 4",
    },
    {
      id: 1,
      nev: "Alma",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    }
  );
  const model = new Model();
  const lista = model.getTermekLista();

  model.rendezTermekLista("arSzerintNovevo");

  console.assert(lista[0].id === 4, "hiba: első elem nem 'Körte'");
  console.assert(lista[1].id === 1, "hiba: második elem nem 'Alma'");
  console.log("Lefutott a rendezTermekListaArSzerintNovekvo");
}

rendezTermekListaArSzerintNovekvo();

function rendezTermekListaArSzerintCsokkeno() {
  termekLista.length = 0;
  termekLista.push(
    {
      id: 4,
      nev: "Körte",
      ar: 1200,
      kep: "./kepek/placeholder.jpg",
      leiras: "Leírás 4",
    },
    {
      id: 1,
      nev: "Alma",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    }
  );
  const model = new Model();
  const lista = model.getTermekLista();
  model.rendezTermekLista("arSzerintCsokkeno");
  console.assert(lista[0].id === 1, "hiba: első elem nem 'Alma'");
  console.assert(lista[1].id === 4, "hiba: második elem nem 'Körte'");
  console.log("Lefutott a rendezTermekListaArSzerintCsokkeno");
}
rendezTermekListaArSzerintCsokkeno();

function szuresTermekListaTeszt() {
  const model = new Model();

  model.getTermekLista().splice(0, model.getTermekLista().length);

  const termekek = [
    {
      id: 1,
      nev: "Alma",
      ar: 1300,
      kep: "./kepek/placeholder.jpg",
      leiras: "Friss és ropogós",
    },
    {
      id: 2,
      nev: "Körte",
      ar: 900,
      kep: "./kepek/placeholder.jpg",
      leiras: "Édes gyümölcs",
    },
    {
      id: 3,
      nev: "Banán",
      ar: 800,
      kep: "./kepek/placeholder.jpg",
      leiras: "Egészséges és finom",
    },
  ];

  termekek.forEach((termek) => model.addTermek(termek));

  let eredmeny = model.szuresTermekLista("édes");
  console.assert(
    eredmeny.length === 1,
    `hiba: egy találat kell, kaptam: ${eredmeny.length}`
  );
  console.assert(eredmeny[0].nev === "Körte", "hiba: találat nem Körte");

  eredmeny = model.szuresTermekLista("a");
  console.assert(
    eredmeny.length === 3,
    `hiba: három találat kell, kaptam: ${eredmeny.length}`
  );

  eredmeny = model.szuresTermekLista("xyz");
  console.assert(
    eredmeny.length === 0,
    `hiba: nulla találat kell, kaptam: ${eredmeny.length}`
  );

  eredmeny = model.szuresTermekLista("");
  console.assert(
    eredmeny.length === 3,
    "hiba: üres kereséskor minden termék kell"
  );

  eredmeny = model.szuresTermekLista(null);
  console.assert(
    eredmeny.length === 3,
    "hiba: null kereséskor minden termék kell"
  );

  eredmeny = model.szuresTermekLista(123);
  console.assert(
    eredmeny.length === 3,
    "hiba: nem string kereséskor minden termék kell"
  );

  console.log("szuresTermekListaTeszt lefutott");
}
szuresTermekListaTeszt();

function getKosarDarabszamTeszt() {
  const model = new Model();

  const termek1 = {
    id: 1,
    nev: "Alma",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Friss",
  };
  const termek2 = {
    id: 2,
    nev: "Körte",
    ar: 900,
    kep: "./kepek/placeholder.jpg",
    leiras: "Édes",
  };

  model.addKosar(termek1);
  model.addKosar(termek1);
  model.addKosar(termek2);

  const darabszam = model.getKosarDarabszam();
  console.assert(
    darabszam === 3,
    `hiba: kosár darabszám 3 kell legyen, de ${darabszam}`
  );

  model.removeKosarItem(termek1.id);

  const darabszam2 = model.getKosarDarabszam();
  console.assert(
    darabszam2 === 1,
    `hiba: kosár darabszám 1 kell legyen, de ${darabszam2}`
  );

  console.log("getKosarDarabszamTeszt lefutott");
}

getKosarDarabszamTeszt();
