const memberOfTeam =
    [
        {
            name: "Wayne Barnett",
            role: "Founder & CEO",
            picture: "wayne-barnett-founder-ceo.jpg"
        },
        {
            name: "Angela Caroll",
            role: "Chief Editor",
            picture: "angela-caroll-chief-editor.jpg"
        },
        {
            name: "Walter Gordon",
            role: "Office Manager",
            picture: "walter-gordon-office-manager.jpg"
        },
        {
            name: "Angela Lopez",
            role: "Social Media Manager",
            picture: "angela-lopez-social-media-manager.jpg"
        },
        {
            name: "Scott Estrada",
            role: "Developer",
            picture: "scott-estrada-developer.jpg"
        },
        {
            name: "Barbara Ramos",
            role: "Graphic Designer",
            picture: "barbara-ramos-graphic-designer.jpg"
        }
    ];

//PRENDO l'elemento main, nell'index e lo salvo nella varibile mainElement
const mainElement = document.querySelector("main");

//CREO l'elemento container, AGGIUNGO la classe container-fluid, INSERISCO l'elemento creato nel main
const divContainerElement = document.createElement("div");
divContainerElement.classList.add("container-fluid");
mainElement.append(divContainerElement);

//CREO l'elemento row, AGGIUNGO la classe row e le classi flex, INSERISCO l'elemento creato nel div-container
const divRowElement = document.createElement("div");
divRowElement.classList.add("row", "d-flex", "flex-wrap");
divContainerElement.append(divRowElement);

let number = 0;

for (let i = 0; i < memberOfTeam.length; i++) {
    number++;
    console.log(number + "° Membro: ");

    //CREO l'elemento div, AGGIUNGO il div creato all'elemento main
    const divColElement = document.createElement("div");
    divColElement.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3", "text-center");
    divRowElement.append(divColElement);

    //CREO l'elemento card, che sarà contenuto nella div col
    const divCard = document.createElement("div");
    divCard.classList.add("card", "m-auto");
    divColElement.append(divCard);

    //CREO l'elemento img, AGGIUGNO l'elemento img alla divCard
    const newImgElement = document.createElement("img");
    newImgElement.src = "./img/" + memberOfTeam[i].picture;
    newImgElement.alt = "Foto profilo " + memberOfTeam[i].name;
    divCard.append(newImgElement);

    //CREO il div che conterrà le info del membro del team, AGGIUGNO la classe card-body, INSERISCO il div-card-body nel div-card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    divCard.append(cardBody);

    //CREO l'elemento h5, AGGIUNGO la classe text-center, INSERISCO l'elemento nel card-body
    const newH5element = document.createElement("h5");
    newH5element.innerHTML = memberOfTeam[i].name;
    newH5element.classList.add("text-center", "fw-bold");
    cardBody.append(newH5element);

    //CREO l'elemento nome, ASSEGNO all'innerHTML dell'elemento nomne la chiave "name", INSERISCO l'elemento creato nel cadbody
    const nameElement = document.createElement("p");
    nameElement.innerHTML = "Nome: "  + memberOfTeam[i].name;
    cardBody.append(nameElement);

    //CREO l'elemento ruolo, ASSEGNO all'innerHTML dell'elemento nomne la chiave "role", INSERISCO l'elemento creato nel cadbody
    const roleElement = document.createElement("p");
    roleElement.innerHTML = "Ruolo: "  + memberOfTeam[i].role;
    cardBody.append(roleElement);

    /*
    for (let key in memberOfTeam[i]) {
        let currentMembere = memberOfTeam[i];
        console.log(key + ": " + currentMembere[key]);

        if (key != "picture") {
            //CREO l'elemento p, ASSEGNO all'elemento una classe, AGGIUGNO l'elemento p al div-card-body
            const newPElement = document.createElement("p");
            newPElement.innerHTML = key + ": " + currentMembere[key];
            cardBody.append(newPElement);
        }       
    }*/

    //CREO l'elemento a, AGGIUNGO all'elemento a delle classi, INSERISCO l'elemento a nel div-body-card
    const newAElement = document.createElement("a");
    newAElement.classList.add("btn", "btn-primary");
    newAElement.innerHTML = "scopri di più";
    cardBody.append(newAElement);

}



