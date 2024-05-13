var project = document.getElementsByClassName("internship-project");

function lastChange() {
    var lastEdit = new Date(document.lastModified);
    document.getElementById('website-change').innerHTML = lastEdit;
}
