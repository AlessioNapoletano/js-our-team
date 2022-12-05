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
            role: "Social Media",
            picture: "Manager  angela-lopez-social-media-manager.jpg"
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
    divColElement.classList.add("col-12", "mb-3", "col-md-4" , "border" , "radius");
    divRowElement.append(divColElement);


    //CREO l'elemento h2, AGGIUGNO l'elemento h2 al div
    const newH2element = document.createElement("h2");
    newH2element.innerHTML = number + "° Membro: ";
    newH2element.classList.add("text-center");
    divColElement.append(newH2element);

    for (let key in memberOfTeam[i]) {
        let currentMembere = memberOfTeam[i];
        console.log(key + ": " + currentMembere[key]);

        //CREO l'elemento p, ASSEGNO all'elemento una classe, AGGIUGNO l'elemento p al div
        const newPElement = document.createElement("p");
        newPElement.innerHTML = key + ": " + currentMembere[key];
        divColElement.append(newPElement);

    }
}



