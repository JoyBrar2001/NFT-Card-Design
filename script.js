const div = document.getElementById("main");

var htmlString = "";

const content = {
    "Doom":{title:"Doom", price:"56.00", sale:"40.00", url:"Doom"},
    "Batman":{title:"Batman", price:"50.00", sale:"36.00", url:"Batman Arkham Knight"},
    "Elden Ring":{title:"Elden Ring", price:"64.00", sale:"45.00", url:"Elden Ring"},
    "God of War":{title:"God of War", price:"56.99", sale:"43.99", url:"GoW"}
};

for(var key in content){
    var obj = content[key];

    div.innerHTML += `
    <div class="card">
    <div class="img_container">
    <img src="${Object.values(obj)[3]}.jpg" alt="">
    </div>
    <div class="card_content">
    <h2 class="nft_name">${Object.values(obj)[0]}</h2>
    <p class="nft_price">$${Object.values(obj)[1]}</p>
    <p class="nft_lastsale">Last Sale $${Object.values(obj)[2]}</p>
    </div>
    <div class="addtocart_container">
    <button class="btn_addtocart">Add to Cart</button>
    </div>
    </div>
    `;

}