const search = document.getElementById("search");

search.addEventListener("input", function () {

    const term = this.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const elements = document.querySelectorAll(
        ".card, .access-card, .location-row, tbody tr"
    );

    elements.forEach(element => {

        const text = element.innerText
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        element.style.display =
            text.includes(term)
                ? ""
                : "none";

    });

});