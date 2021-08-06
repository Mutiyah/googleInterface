var googleApps = document.getElementById('google-apps-link');
googleApps.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('modal-section').style.opacity = "1";
    console.log("hello");
})

// var topMenuPara = document.getElementById('top-menu-para');

// googleApps.addEventListener('mouseover', function(e){
//     if(e){
//         // topMenuPara.style.opacity = "1";
//             topMenuPara.className = "appear";
//             }
//     else if(!e){
//         topMenuPara.style.opacity = "0"
//     }
// })