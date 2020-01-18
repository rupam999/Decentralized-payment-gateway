const handleSendMoney = async () => {
    let id = document.getElementById("id").value;
    let eth = document.getElementById("eth").value;
    var name=localStorage.getItem("name");
    var address=localStorage.getItem("address");
    console.log(JSON.stringify(address));
    const response = await axios.post('http://localhost:8000/setNotifications', {
        sid: address, eth, tid:id,
    }) 
    console.log("response", response);
    
    document.getElementById("id").value = "";
    document.getElementById("eth").value = "";

}