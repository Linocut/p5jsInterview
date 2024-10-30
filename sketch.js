let firstMessage; 
let currentMessage; 
let messageBoxImage; 
let glauciaSpriteNeutral; 
let glauciaSpriteSad; 
let bgImage; 
let coffeeImage; 
let music; 


let gameState = {
  gameEnd: false,
  coffee: false, 
 
};

function preload()
{
  messageBoxImage = loadImage('messageBox.png');
  glauciaSpriteNeutral = loadImage("GlauciaNeutral.png");
  glauciaSpriteSad =  loadImage("GlauciaSad.png");
  glauciaSpriteHappy = loadImage("GlauciaHappy.png");
  bgImage = loadImage("Background.png");
  coffeeImage = loadImage("coffee.png");
  music = loadSound('glauciaChill.mp4');	
  
}
function setup() {
  createCanvas(400, 400);
  gameEnd = false; 
  music.loop();
  let finalMessageTwo = new message("Thank you for playing.",[], null, null,);
  let finalMessage = new message("Thank you for playing.",[], finalMessageTwo, null, gameState, 0);
  
   let endMessageTwo = new message("The woman walked you out. Maybe the next town had a position open. ",[], finalMessage, null);
  let endMessage = new message("And just like that, you didn't get the position.. whatever it was you were trying for.",[], finalMessage, null);
  
  let goodEndThree = new message("The woman walked you out the office and out of town. Hopefully the job is worth it.",[], finalMessage, null);
  let goodEndTwo = new message("Great! I'll see you soon. Glad this was productive.",[], goodEndThree, glauciaSpriteHappy);
  let goodEnd = new message("You signed your name.",[], goodEndTwo, null);
  
  
   let badEndFour = new message("I'll walk you out. ", [], endMessageTwo , glauciaSpriteNeutral);
   let badEndThree = new message("Well... there's nothing I can do about that. ",[], badEndFour, glauciaSpriteSad);
  let bad = new choice("Not enough pay.", badEndThree);
  let badTwo = new choice("I changed my mind.", badEndThree);
  let badArray = [bad, badTwo ]; 
  
    let badEndTwo = new message("Is everything okay?",badArray, null , glauciaSpriteSad);
  let badEnd = new message("You don't sign your name. The atmosphere was tense.",[], badEndTwo, null);
  
  
   let signChoice = new choice("Yes", goodEnd);
  let signChoiceTwo = new choice("No", badEnd);
  let signChoiceArray = [signChoice, signChoiceTwo ]; 
  
  let convoSeven = new message("Sign:", signChoiceArray, null,null);
  let convoSix = new message("The woman left to go get the paper. After a moment, she came back.", [], convoSeven,null);
      let convoFive = new message("If that's all good with you, you just need to sign this paper.", [], convoSix,glauciaSpriteHappy);
    let convoFour = new message("For your roll, your bills will generally be paid for, the pay is 100 a week.", [], convoFive,glauciaSpriteHappy);
  let convoThree = new message("You'll need to move here in about one month.", [], convoFour,glauciaSpriteNeutral);
    
  let convoTwo = new message("For the most part.", [], convoThree,glauciaSpriteNeutral);
  let convo = new message("It's important to remember we always welcome new staff.", [], convoTwo,glauciaSpriteHappy);
  
  
  let intrestedMessage = new message("Good to hear.", [], convo,glauciaSpriteNeutral);
  
  let noWork = new message("I see.. maybe you're not cut out for here.", [], endMessage,glauciaSpriteSad);
  
    let productionChoice = new choice("Yes, I'd like that job.", intrestedMessage);
  let productionChoiceTwo = new choice("That sounds boring.", noWork);
  let productionArrayThree = [productionChoice,productionChoiceTwo ]; 
  
  
    let productionMessageThree = new message("Interested?", productionArrayThree, null,glauciaSpriteNeutral);
  
  
   let productionMessageTwo = new message("These items include cardboard boxes, and offce supplies.", [], productionMessageThree,glauciaSpriteNeutral);
  
 let productionMessage = new message("In production you make items yourself in bulk.", [], productionMessageTwo,glauciaSpriteNeutral);
  
  
  
  let jobChoice = new choice("sure...", intrestedMessage);
  let jobChoiceTwo = new choice("Noo..", noWork);
  let jobArrayThree = [jobChoice,jobChoiceTwo ]; 
  
  
  
   let optionSwitchTwo =  new message("Intrested?",jobArrayThree, null,glauciaSpriteNeutral);
   let optionSwitch =  new message("What about production then? That's making the products yourself.",[], optionSwitchTwo,glauciaSpriteSad);
  
    let tradeChoiceTwo = new choice("Yeah, Sounds great!", intrestedMessage);
  let tradeChoiceThree = new choice("Not really..", optionSwitch);
  let jobArrayTwo = [tradeChoiceTwo,tradeChoiceThree ]; 
  
  let tradeMessageSix =  new message("Well? Interested?",jobArrayTwo, null,glauciaSpriteNeutral);
    let tradeMessageFive =  new message("And setting up shops with our made goods in new locations.", [], tradeMessageSix,glauciaSpriteNeutral);
  let tradeMessageFour =  new message("The other positions include talking to new places to establish routes.", [], tradeMessageFive,glauciaSpriteNeutral);
  let tradeMessageThree =  new message("You get more money for the places, routes, and people you find.", [], tradeMessageFour,glauciaSpriteNeutral);
  let tradeMessageTwo =  new message("You can give this data to the internal division, where it will be collected.", [], tradeMessageThree,glauciaSpriteNeutral);
  
  let tradeMessage =  new message("With the trade division, you go into new lands and map them out.", [], tradeMessageTwo,glauciaSpriteNeutral);
  
  let tradeChoice = new choice("Trade sounds good.", tradeMessage);
  let productChoice = new choice("What's production?", productionMessage);
  let jobArray = [tradeChoice, productChoice]; 
  
  let uninterestedMessageFour =  new message("How about the others?", jobArray, null,glauciaSpriteNeutral);
  let uninterestedMessageThree =  new message("It seems like protection you can't do.", [], uninterestedMessageFour,glauciaSpriteNeutral);
   let uninterestedMessageTwo =  new message("We handle trade, production, and protection.", [], uninterestedMessageThree,glauciaSpriteNeutral);
   let uninterestedMessage =  new message("Did you even read the job description? There's nothing weird about it.", [], uninterestedMessageTwo ,glauciaSpriteSad);
  
  let doItNoChoiceTwo = new choice("That sounds weird.", uninterestedMessage);
  let doItYesChoiceTwo = new choice("Of course.", intrestedMessage);
  let doItArrayTwo = [doItYesChoiceTwo, doItNoChoiceTwo]; 
  
  let doItNoMessageFive =  new message("Would you?", doItArrayTwo, null,glauciaSpriteNeutral);
  let doItNoMessageFour =  new message("Your boss asks you to watch over their well being on a business trip.", [], doItNoMessageFive,glauciaSpriteNeutral);
   let doItNoMessageThree =  new message("Maybe there's something else you can do.", [], doItNoMessageFour,glauciaSpriteSad);
  let doItNoMessageTwo =  new message("It feels like she was disappointed in that..", [], doItNoMessageThree,null);
  let doItNoMessage =  new message("Is that..so...", [], doItNoMessageTwo,glauciaSpriteSad);
  
  
  
  
  
  let doItNoChoice = new choice("I don't think so.", doItNoMessage);
  let doItYesChoice = new choice("Yes, not a problem.", intrestedMessage);
  let doItArray = [doItYesChoice, doItNoChoice]; 
  let questionFour = new message("Can you do it?",doItArray, null,glauciaSpriteNeutral);
   let newAskTwo = new message("Your superior asks you check for packages the person receives or sends out. ", [], questionFour,glauciaSpriteNeutral);
  
   let newAsk = new message("Imagine that you're tasked with watching someone. ", [], newAskTwo,glauciaSpriteNeutral);
  
  
  let coffeeYesTwo = new message("I'll start asking the REAL questions then. And here- have some.", [], newAsk,glauciaSpriteHappy, gameState, 1);
     let coffeeYes = new message("Thank the gods. I thought you might have had to leave early.", [], coffeeYesTwo,glauciaSpriteHappy);

  
  let reallyMessage =  new message("Yeah..bye..", [], endMessage,glauciaSpriteSad);
  let coffeeAcceptChoice = new choice("Eh.. Figures.", endMessage);
  let coffeeReallyChoice = new choice("Really just like that?", reallyMessage);
  let coffeeTwoArray = [coffeeAcceptChoice, coffeeReallyChoice]; 
  
    let coffeeNoThree = new message("Maybe you're not right for us...", coffeeTwoArray, null,glauciaSpriteSad);
    let coffeeNoTwo = new message("...", [], coffeeNoThree,glauciaSpriteSad);
   let coffeeNo = new message("Oh..", [], coffeeNoTwo,glauciaSpriteSad);
  
  
   let coffeeYesChoice = new choice("Yes.", coffeeYes);
   let coffeeNoChoice = new choice("No.", coffeeNo);
   let coffeeArray = [coffeeYesChoice, coffeeNoChoice]; 
  
  let questionThree = new message("You drink coffee?", coffeeArray, null,glauciaSpriteNeutral);
  
  let redChoice = new choice("red.", questionThree);
  let blueChoice = new choice("blue.", questionThree);
  let colorArray = [redChoice, blueChoice]; 
  
  let questionOne = new message("Which color?", colorArray, null,glauciaSpriteNeutral);
  
  let vanillaChoice = new choice("Glazed vanilla with sprinkles.", questionOne);
  let chocolateChoice = new choice("Double chocolate with chips.", questionOne);
  let donutChoiceArray = [vanillaChoice, chocolateChoice]; 
  
  let introMessageThree = new message("Which donut flavor?", donutChoiceArray, null,glauciaSpriteHappy);
  let introMessageTwo = new message("Let's start with a simple one. Just choose the option you'd rather have.", [], introMessageThree,glauciaSpriteNeutral);
  let introMessage = new message("To start the process, I need to ask some questions.", [], introMessageTwo,glauciaSpriteNeutral);
  
    let whatChoiceMessage = new message("... I was only trying to give advice. Let's forget and move on.", [], introMessage,glauciaSpriteNeutral);
  let yesChoiceMessage = new message("It's alright, it's been a busy day for me too.", [], introMessage,glauciaSpriteHappy);
  
  let whatChoice = new choice("You're the one who asked.", whatChoiceMessage);
  let yesChoice = new choice("Oh right, I forgot.", yesChoiceMessage);
  let badChoiceArray = [whatChoice, yesChoice]; 
  
   let badMessageThree = new message("This is an inteview afterall.", badChoiceArray, null,glauciaSpriteSad );
   let badMessageTwo = new message("But I don't think you should get into it.", [], badMessageThree,glauciaSpriteSad );
  let badMessage = new message("Oh I'm sorry..I don't think there's anything I can do to help with that.", [], badMessageTwo,glauciaSpriteSad );
  
  let goodMessageTwo = new message("It's a good thing too, as the interview can take its toll.", [], introMessage, glauciaSpriteHappy);
  
  let firstChoiceArray = [];
  let goodMessage = new message("I'm happy to hear that.", [], goodMessageTwo, glauciaSpriteHappy);
  let firstChoice = new choice("Good", goodMessage);
  let secondChoice = new choice("Bad", badMessage);
  let secondChoiceArray = [firstChoice, secondChoice]; 
  let secondMessage = new message("How are you feeling?",secondChoiceArray, null, glauciaSpriteNeutral);
  firstMessage = new message("Hello", firstChoiceArray, secondMessage, glauciaSpriteNeutral); 
  currentMessage = firstMessage; 

  // Set text properties
  textSize(24);
  textAlign(LEFT, TOP);
}

function draw() {
  background(220);
  
  currentMessage.display(); 
   if(gameState[0] == true){
     restart(); 
     currentMessage.display(); 
   }
  
  if(gameState[1] == true){
     image(coffeeImage, 0, 0);
  }
  
}
function restart(){
  currentMessage = firstMessage; 
  gameState[0] = false;
  gameState[1] = false; 
}
function mouseClicked() {
  if(currentMessage.nextMessage != null){
      currentMessage = currentMessage.nextMessage; 

  }
  if(currentMessage.choiceArray != null){
    if(currentMessage.choiceArray.length > 0 ){

      for (let i = 0; i < currentMessage.choiceArray.length; i++) {
      let rectValues = currentMessage.choiceArray[i].getRect(); 
      if ( mouseX >  rectValues[0]  && mouseX <  rectValues[0] + rectValues[2] &&
          mouseY >  rectValues[1] && mouseY < rectValues[1]  + rectValues[3] ) {
   
          currentMessage.choiceArray[i].onClick();
        } 
      }
    }
  }

}


class message{
  
  constructor(messageText, choiceArray, nextMessage, imageVar, variableChange, varIndex ){
    this.messageText = messageText; 
    this.choiceArray = choiceArray; 
    this.nextMessage = nextMessage; 
    this.imageVar = imageVar; 
    this.variableChange = variableChange; 
    this.varIndex = varIndex; 
    
  }
  display(){
    //set Var 
    if(this.variableChange != null){
    
      this.variableChange[this.varIndex] = true; 
      //print(this.variableChange);
    }
    
    //drawbg 
    image(bgImage, 0, 0);
    //draw image sprite 
    if(this.imageVar != null){
          image(this.imageVar, 0, 0);

    }
    //draw message box 
    image(messageBoxImage, 0, 0);
    //display the choices
    if(this.choiceArray != null){
      if (this.choiceArray.length > 0) {
          for (let i = 0; i < this.choiceArray.length; i++) {
             this.choiceArray[i].setYPosition(330 + i * 30); 
            this.choiceArray[i].display(); 
          }
        }
    }
    
    //display the message 
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(this.messageText,40,300, 340, 100);
    
    
  }
 
}
class choice{
  constructor(choiceText, nextMessage){
    this.choiceText = choiceText; 
    this.nextMessage = nextMessage; 
    this.yPosition = 0; 
    this.xPosition = 40; 
  }
  setYPosition(inputYPosition){
    this.yPosition = inputYPosition; 
  }
  display(){
    //cant define the height and width in the construction as it changes 
    let foundTextWidth = textWidth(this.choiceText);
    let textHeight = textAscent() + textDescent();
    
    fill(184,159,121);
    stroke(89,60,16);
    rect(this.xPosition, this.yPosition, foundTextWidth, textHeight);
    stroke(0);
    fill(255);
    text(this.choiceText,this.xPosition , this.yPosition); 
    
  }
  onClick(){
    //check if the user clicks on the rect 
    currentMessage = this.nextMessage; 
    
  }
  getRect(){
    //this should return the rectangle of the text 
    let foundTextWidth = textWidth(this.choiceText);
    let textHeight = textAscent() + textDescent();
    let rectInfo = [this.xPosition, this.yPosition, foundTextWidth, textHeight]; 
    return rectInfo; 
    
  }

}