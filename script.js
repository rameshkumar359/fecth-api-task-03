var body=document.querySelector(".content")
body.innerHTML=`<div class="navbar"><h1 class="head">EMOJI COLLECTIONS</h1></div>`
var main=document.querySelector(".main")

async function getdata(){
    try{
        var data=await fetch("https://emojihub.herokuapp.com/api/all").then((data)=>data.json())
        for(var i=0;i<=200;i++){
            main.innerHTML=main.innerHTML+`
            <div class="card" style="width: 18rem;">
  <h1 width="300px">${data[i].htmlCode[0]}</h1>
  <div class="card-body">
    <h5 class="card-title">Name: ${data[i].name}</h5>
    <p class="card-text">Category: ${data[i].category}</p>
    <p class="card-text">Group: ${data[i].group}</p>

  </div>
</div>`
        }
    }
    catch(error){
           console.log(error)
    }
}

getdata()