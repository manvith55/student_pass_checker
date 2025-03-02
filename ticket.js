const seatAvailable = document.getElementById("seatAvailable");
const ageBelow20 = document.getElementById("ageBelow20");
const stdId = document.getElementById("stdId");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeBelow20 = ageBelow20.checked;
  let hasStdId = stdId.checked;

  let feedback;
  if(isSeatAvailable){
    console.log("You're Student");
    feedback = "You're Student";
    if(isAgeBelow20){
      console.log(", Aged Under 20");
      feedback = feedback + ", Aged Under 20";
      if(hasStdId){
        console.log("Has a Student IdCard");
        feedback = feedback + ", Has a Student IdCard";
        if (confirm(`Are you sure? To take a ticket, click "OK"`)) {
            alert("Congratulations 🥳🎉🎊 Your ticket is booked");
        }else {
            console.log(" you don't gey a ticket ");
            feedback += ` "You don't get a ticket"`;
        }
      }else{
        console.log("but you don't have Student IdCard");
        feedback = feedback + ", but you don't have Student IdCard";
      }
    }else{
      console.log("but your age isn't under 20 years");
      feedback = feedback + ", but your age isn't under 20 years";
    }
  }else {
      console.log ("You're not a student");
      feedback = "You're not a student";
    }
    passengerStatus.textContent = feedback ;
});