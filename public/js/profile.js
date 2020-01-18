const getMoney = (() => {
    let money = axios.get(`http://localhost:8000/getMoney`)
        .then(data => {
            document.getElementById("cash").innerHTML = data.data;
        })
        .catch(err => console.log(err));    
})()