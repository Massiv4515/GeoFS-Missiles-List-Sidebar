// ==UserScript==
// @name         Missiles List
// @namespace    http://tampermonkey.net/
// @version      2
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
        width: "150px",
        height: "530px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        marginTop: "42px",
        borderRadius: "8px 0 0 8px",
        fontFamily: "Arial, sans-serif",
        fontSize: "1px",
        lineHeight: "0",
        zIndex: "9999",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease",
        transform: "translateX(0)" // shown by default
    });

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "❮"; // Arrow
    Object.assign(toggleBtn.style, {
        position: "absolute",
        top: "10px",
        left: "-25px",
        width: "25px",
        height: "40px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        border: "none",
        borderRadius: "4px 0 0 8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold"
    });

    let isHidden = false;
    toggleBtn.onclick = () => {
        if (isHidden) {
            panel.style.transform = "translateX(0)";
            toggleBtn.textContent = "❮"; // collapse
        } else {
            panel.style.transform = "translateX(100%)";
            toggleBtn.textContent = "❯"; // expand
        }
        isHidden = !isHidden;
    };

    panel.appendChild(toggleBtn);

    // Data (3 exact sections)
    const sections = {
        "Chaffs": [
            "AIM-7 Sprrow", "AIM-9C Sidewinder", "Matra Super 530", "PL-11", "R-27R / AA-10R Alamo", "R-33 / AA-9 Amos"
        ],
        "Flares": [
            "AIM-9 Sidewinder", "ASRAAM / AIM-132", "IRIS-T", "AAM-3", "Bozdoğan / Merlin",
            "Rafael Python 5", "matra Magic II", "Matra R.510", "Matra R.530", "MAA-1A Piranha", "MAA-1B Piranha", "MBDA MICA IR",
            "PL-9", "R-60 / AA-8 Aphid", "R-27T / AA-10T Alamo", "Sky Sword 1 / TC-1"
        ],
        "Chaffs ": [
            "AIM-120 AMRAAM", "MBDA Meteor", "Astra Mk 1", "AAM-4", "Gökdoğan / Peregrine",
            "Rafael Derby", "Matra R.511", "R-Darter", "MBDA MICA EM", "PL-15", "R-77 / AA-12 Adder",
            "R-27EA / AA-10EA Alamo", "Sky Sword 2 / TC-2"
        ]
    };

    // Function to make section
    function makeSection(name, items) {
        const section = document.createElement("div");

        const header = document.createElement("h3");
        header.textContent = name;
        Object.assign(header.style, {
            margin: "3px 0px 0px 0px",
            fontSize: "8px",
            textDecoration: "underline",
            lineHeight: "1"
        });
        section.appendChild(header);

        const list = document.createElement("ul");
        Object.assign(list.style, {
            margin: "0",
            paddingLeft: "15px",
            listStyleType: "disc",
            fontSize: "10px",
            lineHeight: "12px"
        });

        items.forEach(missile => {
            const li = document.createElement("li");
            li.textContent = missile;
            Object.assign(li.style, {
                margin: "2px 0",
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

