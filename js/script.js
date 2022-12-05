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



for (let i = 0; i < memberOfTeam.length; i++) {
    console.log(i + "° Membro: ");
    const newH2element = document.createElement("h2");
    newH2element.classList.add("px-3")
    newH2element.innerHTML = i + "° Membro: ";
    mainElement.append(newH2element);
    for (let key in memberOfTeam[i]) {
        let currentMembere = memberOfTeam[i];
        console.log(key + ": " + currentMembere[key]);
        const newSpanElement = document.createElement("span");
        newSpanElement.innerHTML = key + ": " + currentMembere[key];
        newSpanElement.classList.add("px-3")
        mainElement.append(newSpanElement);
        
    }
}



