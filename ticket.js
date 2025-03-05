const seatAvailable = document.getElementById("seatAvailable");
const ageBelow20 = document.getElementById("ageBelow20");
const stdId = document.getElementById("stdId");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeBelow20 = ageBelow20.checked;
  let hasStdId = stdId.checked;

  let feedback = "";

  if (isSeatAvailable) {
    console.log("You're Student");
    if (isAgeBelow20) {
      console.log("Aged Under 20");
      if (hasStdId) {
        if (confirm(`Are you sure? To take a ticket, click "OK"`)) {
          alert("Congratulations 🥳🎉🎊 Your ticket is booked");
          console.log(`"Your ticket is booked"`);
          feedback = "Your ticket is booked";
        } else {
          console.log(`"You don't get a ticket",If you want a ticket please Click "OK"`);
          feedback = `"You don't get a ticket".<br>If you want a ticket Click "<b>OK<b>".`;
        }
      } else {
        console.log("But you don't have Student Identity Card");
        feedback += "You don't have Student Identity Card";
      }
    } else {
      console.log("But your age isn't under 20 years");
      feedback = feedback + "Your age isn't under 20 years";
    }
  } else {
    console.log("You're not a Student");
    feedback = "You're not a Student";
  }
  passengerStatus.innerHTML = feedback;
});
