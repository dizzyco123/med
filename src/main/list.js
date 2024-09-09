const obj = [
    {
      "type": "Cancer / Neoplasms",
      "icon": "fa-solid fa-disease",
      "items": [
        {
            "name": "Bladder Cancer",
            "htm": "bladder-cancer.html"
        }
      ]
    },
    {
      "type": "Cardiovascular",
      "icon": "fa-solid fa-heart-pulse",
      "items": []
    },
    {
      "type": "Dermatological",
      "icon": "fa-solid fa-hand-dots",
      "items": []
    },
    {
      "type": "Ear",
      "icon": "fa-solid fa-ear",
      "items": []
    },
    {
      "type": "Eye",
      "icon": "fa-solid fa-eye",
      "items": []
    },
    {
      "type": "Hematological",
      "icon": "fa-solid fa-droplet",
      "items": []
    },
    {
      "type": "Infectious Disease",
      "icon": "fa-solid fa-bacteria",
      "items": []
    },
    {
      "type": "Inflammatory / Immune System",
      "icon": "fa-solid fa-shield-virus",
      "items": []
    },
    {
      "type": "Injury",
      "icon": "fa-solid fa-crutches",
      "items": []
    },
    {
      "type": "Mental",
      "icon": "fa-solid fa-head-side-brain",
      "items": []
    },
    {
      "type": "Metabolic / Endocrine",
      "icon": "fa-solid fa-person",
      "items": []
    },
    {
      "type": "Musculoskeletal",
      "icon": "fa-solid fa-skeleton-ribs",
      "items": []
    },
    {
      "type": "Neurological",
      "icon": "fa-solid fa-brain",
      "items": []
    },
    {
      "type": "Oral / Gastrointestinal",
      "icon": "fa-solid fa-stomach",
      "items": []
    },
    {
      "type": "Renal / Urogenital",
      "icon": "fa-solid fa-kidneys",
      "items": []
    },
    {
      "type": "Reproductive",
      "icon": "fa-solid fa-person-half-dress",
      "items": []
    },
    {
      "type": "Respiratory",
      "icon": "fa-solid fa-lungs",
      "items": []
    }
];

window.addEventListener("load", (event) => {
    var ul = document.getElementById("main-list");

    obj.forEach((item) => {
        var li = document.createElement("li");
        li.setAttribute("class", "l-type");
        
        var details = document.createElement("details");
        details.setAttribute("open", true);
        var summary = document.createElement("summary");
        var ul2 = document.createElement("ul");

        var icon = document.createElement("i");
        icon.setAttribute("class", `${item.icon} large`);

        ul.appendChild(li);
        li.appendChild(details);
        details.appendChild(summary);
        details.appendChild(ul2);
        
        summary.textContent = `${item.type} `;
        summary.appendChild(icon);

        item.items.forEach((item2) => {
            var div = document.createElement("div");
            div.setAttribute("class", "l-div");

            var li2 = document.createElement("li");
            li2.setAttribute("class", "l-item");

            ul2.appendChild(div);
            div.appendChild(li2);

            li2.textContent = item2.name;

            div.addEventListener("click", (event) => {
                window.location.href = item2.htm;
            });
        });
    });
});

