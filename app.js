const tbody = document.getElementById('user-container');
fetch("http://localhost:3001/users")
.then(response=> response.json())
.then(users=>{
    users.map(user=>{
        const row = document.createElement("tr");
        const nametd = document.createElement("td");
        const agetd = document.createElement("td");
        const citytd = document.createElement("td");
        nametd.textContent = user.name;
        agetd.textContent = user.age;
        citytd.textContent = user.city;
        row.appendChild(nametd);
        row.appendChild(agetd);
        row.appendChild(citytd);
        tbody.appendChild(row);

    })

})
const search = document.getElementById('search');
search.addEventListener('keyup',searchFunc);


function searchFunc(){
    const rows = document.querySelectorAll('tbody>tr');
    const td = document.querySelectorAll('tbody>tr>td');
    const searchValue = search.value;
    rows.forEach(row=>{
        const allData = row.querySelectorAll('td');
        const name = allData[0].textContent;
        if(name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1){
            row.style.display = 'table-row';
        }
        else{
            row.style.display = 'none'; 
        }
        console.log(name);
    })
}
