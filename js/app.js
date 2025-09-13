// Start Navbar

// start top navbar
function dropbtn(e){
    // console.log(e.target);
    // console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.nextElementSibling.classList.toggle('show');
    
}
// end top navbar

// start sidebar
$(document).ready(function(){
    $('.sidebarlinks').click(function(){
        $('.sidebarlinks').removeClass('currents');
        $(this).addClass('currents');
    })
})
// end sidebar
// End Navbar