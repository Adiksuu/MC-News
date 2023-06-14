function toSite(site) {
    window.location.search = `n=${site}`;
}
let route = window.location.search.substring(3);
if (route != "") {
    fetch(`./src/routes/${route}.html`)
        .then(function (response) {
        if (!response.ok) {
            window.location.search = "";
        }
        return response.text();
    })
        .then(function (html) {
        document.body.innerHTML = html;
    });
}
//# sourceMappingURL=app.js.map