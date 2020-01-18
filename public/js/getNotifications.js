const getNotification = (async () => {
    console.log("getting notifications")
    let address = localStorage.getItem("address");
    let data = await axios.post('http://localhost:8000/getNotifications', {
        sid: address,
    })
    console.log(data);
    data.data.map( item => {
        let html = `        
        <div class="item-content" id="main-${item.iter}">
        <h6 class="font-weight-normal" ">${item.sid}</h6>
        <button type="button" id=${item.iter} onclick="handleYesNo(this.id)" class="btn btn-inverse-success btn-rounded btn-sm yes">Accept</button>
        <button type="button" id=${-item.iter} onclick="handleYesNo(this.id)" class="btn btn-inverse-danger btn-rounded btn-sm no">Reject</button>
         </div>`
        document.getElementById("notifications").innerHTML += html;
    })    
})()

const handleYesNo = async (e) => {
    const iter = e;
    console.log(iter);
    if(iter < 0){
        let res = await axios.post('http://localhost:8000/notificationNo',{
            iter: -iter,
        });
        console.log(res);
        document.getElementById(`main-${-iter}`).innerHTML = "deleted"
    } else {
        let res = await axios.post('http://localhost:8000/notificationYes', {
            iter: iter,
        })
        document.getElementById(`main-${iter}`).innerHTML = "Transaction completed"
    }
    
}

