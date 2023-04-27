function call(box, img){
    let b = document.querySelector(".box" + box);
    let image = document.querySelector(".image1");
    let addToCartbtn = document.querySelector(".addToCart");
    b.addEventListener('click', ()=>{
        image.classList = "image";
        image.classList.add("image" + box);
        document.body.classList = "";
        document.body.classList.add("bg" + box);
        addToCartbtn.classList = "addToCart";
        addToCartbtn.classList.add("addToCartbtn" + box);


    })
}
call(1,1);
call(2,1);
call(3,1);
call(4,1);
call(5,1);
call(6,1);

let descbtn = document.querySelector(".desc");
let descData = document.querySelector(".desc-data");
let detailsBtn = document.querySelector(".details");
let detailsData = document.querySelector(".details-data");
let detailCon = document.querySelector(".detailCon");
descbtn.addEventListener('click', ()=> {
    descData.style.display = "block";
    detailsData.style.display = "none";
    descbtn.style.fontSize = "larger";
    detailsBtn.style.fontSize = "medium";
    descbtn.style.opacity = "1";
    detailsBtn.style.opacity = "0.8";
    detailCon.style.visibility = "hidden";
    detailCon.style.position = "absolute";
} )

detailsBtn.addEventListener('click', ()=>{
    descData.style.display = "none";
    detailsData.style.display = "block";
    descbtn.style.fontSize = "medium";
    detailsBtn.style.fontSize = "larger";
    descbtn.style.opacity = "0.8";
    detailsBtn.style.opacity = "1";
    detailCon.style.visibility = "visible";
    detailCon.style.position = "initial";
})

const buttons = document.querySelectorAll('.colors');

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        for(let j = 0; j < buttons.length; j++) {
          buttons[j].classList.remove('selected');
        }
        this.classList.add('selected');
      });
    }
