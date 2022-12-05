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

const mainElement = document.querySelector("main");
mainElement.classList.add("d-flex", "flex-wrap");

const divContainerElement = document.createElement("div");
divContainerElement.classList.add("container-fluid");
mainElement.append(divContainerElement);

const divRowElement = document.createElement("div");
divRowElement.classList.add("row", "d-flex", "flex-wrap");
divContainerElement.append(divRowElement);




let number = 0;

for (let i = 0; i < memberOfTeam.length; i++) {
    number++;
    console.log(number + "° Membro: ");

    //CREO l'elemento div, AGGIUNGO il div creato all'elemento main
    const divColElement = document.createElement("div");
    divColElement.classList.add("col-12", "mb-3", "col-md-4", "text-center");
    divRowElement.append(divColElement);

    //CREO l'elemento card, che sarà contenuto nella div col
    const divCard = document.createElement("div");
    divCard.classList.add("card");
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
    newH5element.classList.add("text-center" , "fw-bold");
    cardBody.append(newH5element);

    for (let key in memberOfTeam[i]) {
        let currentMembere = memberOfTeam[i];
        console.log(key + ": " + currentMembere[key]);

        //CREO l'elemento p, ASSEGNO all'elemento una classe, AGGIUGNO l'elemento p al div-card-body
        const newPElement = document.createElement("p");
        newPElement.innerHTML = key + ": " + currentMembere[key];
        cardBody.append(newPElement);
    }

    //CREO l'elemento a, AGGIUNGO all'elemento a delle classi, INSERISCO l'elemento a nel div-body-card
    const newAElement = document.createElement("a");
    newAElement.classList.add("btn", "btn-primary");
    newAElement.innerHTML = "scopri di più";
    cardBody.append(newAElement);

}



