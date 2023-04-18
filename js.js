function navLink() {
  let burgerMenu = document.getElementsByClassName("burger");
  let navMenu = burgerMenu[0].parentElement;
  burgerMenu[0].classList.toggle("opened");
  navMenu.classList.toggle("mobile");
}

//ScrollSpy

let mySection = document.querySelectorAll("section");
let currentlyActive = "intro";

function myDistance() {
  for (let i = 0; i < mySection.length; i++) {
    let mySectionDistance = mySection[i].getBoundingClientRect().top;
    //console.log("my distance " + mySection[i].id);
    //console.log("my section distance " + mySectionDistance);
    if (mySectionDistance < 300 && mySectionDistance > -300) {
      if (currentlyActive != mySection[i].id) {
        console.log(currentlyActive + "link");
        document
          .getElementById(currentlyActive + "link")
          .classList.remove("active");

        document
          .getElementById(mySection[i].id + "link")
          .classList.add("active");
        currentlyActive = mySection[i].id;
      }
      //document.getElementById(currentlyActive).classList.remove("active");
      //document.getElementById(mySection[i].id).classList.add("active");
    }
  }

  /*  mySection.forEach(console.log(mySection[0].getBoundingClientRect().top));
  document.getElementById("approach").getBoundingClientRect().top;
  */
}

setInterval(myDistance, 500);
