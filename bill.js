document.getElementById("expense").addEventListener("change",(event)=>{
    
    if(event.path[0].value==="food")
        document.getElementById("food").hidden=false
        else
        document.getElementById("food").hidden=true

    if(event.path[0].value==="travel")
        document.getElementById("travel").hidden=false
        else
        document.getElementById("travel").hidden=true

    if(event.path[0].value==="stay")
        document.getElementById("stay").hidden=false
        else
        document.getElementById("stay").hidden=true

    if(event.path[0].value==="Others"){
        console.log(document.getElementById("Others"))
        document.getElementById("Others").hidden=false}
        else
        document.getElementById("Others").hidden=true
    
})
