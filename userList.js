let body = document.querySelector(".body")

let datas = JSON.parse(localStorage.getItem("users"));

for (const data of datas) {
    body.innerHTML += `
    <tr>
    <td>${data.name}</td>
    <td>${data.surname}</td>
    <td>${data.age}</td>
    <td>${data.address}</td>
    <td>${data.gender}</td>
</tr>

    `;
}