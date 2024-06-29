
function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pick_loc = document.getElementById("pick_loc").value;
    var dest = document.getElementById("dest").value;
    var pick_date = document.getElementById("pick_date").value;
    
    var url = "https://wa.me/+4917682239961?text=" 
    + "Hi there, i want to book a Ride." + "%0a"
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email + "%0a"
    + "Pickup Loc: " + pick_loc +  "%0a"
    + "Destination: " + dest +  "%0a"
    + "Pickup Date/Time: " + pick_date;

    window.open(url, '_blank').focus();
}

