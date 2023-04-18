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
    // loop through array of html sections
    let mySectionDistance = mySection[i].getBoundingClientRect().top; // for each section calc distance to current scroll position

    if (mySectionDistance < 300 && mySectionDistance > -300) {
      if (currentlyActive != mySection[i].id) {
        // if distance is +-300px and not the same as the last active section
        document
          .getElementById(currentlyActive + "link") // in the nav, adress the section that was active before
          .classList.remove("active"); // and remove the active-class

        document
          .getElementById(mySection[i].id + "link") // in the nav, adress currently active section
          .classList.add("active");
        currentlyActive = mySection[i].id; // put in current section as the most recent active
      }
    }
  }
}

setInterval(myDistance, 500);

/*
flex-flow: column-reverse wrap-reverse;
align-content:space-between;
justify-content:center;
