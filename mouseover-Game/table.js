const createTable = (rn, count) => {
  for (let r = 0; r < parseInt(rn, 10); r++) {
    const x = document.getElementById("myTable").insertRow(r);
    for (let c = 0; c < parseInt(rn, 10); c++) {
      x.insertCell(c);
    }
    x.addEventListener("mouseover", (event) => {
      count--;
      if (count <= 0) {
        alert("END");
        removeRow();
        getUserInput();
      }
      event.target.style.background = "red";
      event.stopPropagation();
      setTimeout(() => {
        event.target.style.background = "white";
      }, 500);
    });
  }
};
function removeRow() {
  const table = document.getElementById("myTable");
  for (let i = table.rows.length - 1; i >= 0; i--) {
    table.deleteRow(i);
  }
}
const getUserInput = () => {
  rn = window.prompt("Value of N", "");
  count = window.prompt("Value of X", "");
  createTable(rn, count);
};

getUserInput();
