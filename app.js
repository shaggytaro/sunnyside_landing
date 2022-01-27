function openNav() {
    //hide hamburger
    //nav links show
    //close button show

    let hamburger = document.querySelector("#hamburger");
    hamburger.style.display = "none";
    
    let navlinks = document.querySelector("#nav-links");
    navlinks.style.display = "flex";
    
    let closeBtn = document.querySelector("#close-hamburger");
    closeBtn.style.display = "block";
}

function closeNav() {

        let hamburger = document.querySelector("#hamburger");
        hamburger.style.display = "block";
        
        let navlinks = document.querySelector("#nav-links");
        navlinks.style.display = "none";
        
        let closeBtn = document.querySelector("#close-hamburger");
        closeBtn.style.display = "none";

    }


