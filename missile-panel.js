// ==UserScript==
// @name         Missiles List
// @namespace    http://tampermonkey.net/
// @version      1
// @description  creates a panel on the right side of your screen containing the missiles list used in GeoFS Military Roleplay.
// @author       Massiv4515
// @match        https://www.geo-fs.com/geofs.php?v=3.9
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function () {
    // Create container
    const panel = document.createElement("div");
    panel.id = "missile-list-panel";
    Object.assign(panel.style, {
        position: "fixed",
        top: "0px",
        right: "0px",
        width: "100px",
        height: "500px",
        background: "rgba(0,0,0,0.5)",
        color: "white",
        marginTop: "42px",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        fontSize: "1px",
        lineHeight: "0",
        zIndex: "9999",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    });

    // Data (3 exact sections)
    const sections = {
        "Chaffs": [
            "AIM-7",
            "AIM-9C",
            "Super 530",
            "PL-11",
            "R-27R / AA-10R",
            "R-33 / AA-9"
        ],
        "Flares": [
            "AIM-9",
            "ASRAAM / AIM-132",
            "IRIS-T",
            "AAM-3",
            "Bozdoğan / Merlin",
            "Python 5",
            "Magic II",
            "R.510",
            "R.530",
            "MAA-1A",
            "MAA-1B",
            "MICA IR",
            "PL-9",
            "R-60 / AA-8",
            "R-27T / AA-10T",
            "Sky Sword 1 / TC-1"
        ],
        "Chaffs ": [
            "AIM-120 AMRAAM",
            "Meteor",
            "Astra Mk 1",
            "AAM-4",
            "Gökdoğan / Peregrine",
            "Derby",
            "R.511",
            "R-Darter",
            "MICA EM",
            "PL-15",
            "R-77 / AA-12",
            "R-27EA / AA-10EA",
            "Sky Sword 2 / TC-2"
        ]
    };

    // Function to make section
    function makeSection(name, items) {
        const section = document.createElement("div");

        const header = document.createElement("h3");
        header.textContent = name;
        Object.assign(header.style, {
            margin: "0",
            fontSize: "8px",
            textDecoration: "underline",
            lineHeight: "1"
        });
        section.appendChild(header);

        const list = document.createElement("ul");
        Object.assign(list.style, {
            margin: "0",
            paddingLeft: "2px",
            listStyleType: "disc",
            fontSize: "10px",
            lineHeight: "12px"
        });

        items.forEach(missile => {
            const li = document.createElement("li");
            li.textContent = missile;
            Object.assign(li.style, {
                margin: "3",
                padding: "0"
            });
            list.appendChild(li);
        });

        section.appendChild(list);
        return section;
    }

    // Add sections
    for (const [name, items] of Object.entries(sections)) {
        panel.appendChild(makeSection(name, items));
    }

    // Add to page
    document.body.appendChild(panel);
})();

