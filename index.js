const app = "I don't do much."

function fatBastard(meal){
  function whatsForDinner(){
    if (!meal) {
      console.log("My belly is empty.")
    } else if (meal === "Mini-Me") {
      console.log("The wee man is in my belly!")
    } else {
      console.log(`I'm eatin a bit of ${meal}! Burp.`)
    }
  }
  function digest() {
    meal = undefined;
  }
  // return {
    x = whatsForDinner,
    y = digest
  // };
}

const {whatsForDinner, digest} = fatBastard('ribeye');
whatsForDinner();
digest();
whatsForDinner();

const tummy = fatBastard("Kobe beef");
tummy();

function raspyDoorGuy(){
  const password = 'yarr';

  function givePassword(givenPassword) {
    if (givenPassword === password) {
      console.log('Ye may enter.')
    } else {
      console.log('Begone, landlubber!')
    }
  }
  return {
    givePassword
  };
}
