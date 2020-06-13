


for(var i=9; i<=17; i++){
    document.querySelector(".container-planner").innerHTML += 
    `<div class = "row">
    <div class = "hour col-3 col-md-2">${moment(i,"LT").format("hA")}</div>
<textarea class = "col" id="description"></textarea>
</div>`
}

