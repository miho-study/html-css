document.addEventListener("DOMContentLoaded", function () {
    let tableCells = document.querySelectorAll("td");

    tableCells.forEach(cell => {
        let value = parseFloat(cell.textContent);
        
        if (!isNaN(value) && value >= 0.275 && value <= 0.999) {
            cell.style.backgroundColor = "yellow";
        }
    });
});