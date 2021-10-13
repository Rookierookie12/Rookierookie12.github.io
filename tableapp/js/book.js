let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("cick",function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    BookNow(userNameVal),(userPaxVal),(userRemarksVal)

})

function BookNow(userName, userEmail, userPax, userRemarks){
    let url = 'https://api.sheety.co/ca1ed0279f0fd5ea9d6ea713494468db/bookingApp/bookings';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      header: {
          "Content-Type": "application/json"
      }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            if(json.booking.length == 1){
                alert(json.booking.name + " added in the list!")
            }    
        });
}