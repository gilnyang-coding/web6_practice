document.querySelector(".myTag").addEventListener("change", function () {
    if (this.value === "add") {
        let newTagName = prompt("태그 이름");
        if (newTagName) {
            let newtag = document.createElement("option")
            newtag.text = newTagName
            this.insertBefore(newtag, this.lastElementChild)
        }
    }
});

document.querySelector(".ourTag").addEventListener("change", function () {
    if (this.value === "add") {
        let newTagName = prompt("태그 이름")
        if (newTagName) {
            let newtag = newcreateElement("option")
            newtag.text = newTagName
            this.insertBefore(newtag, lastElementChild)
        }
    }
});