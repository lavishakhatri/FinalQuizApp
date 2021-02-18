

var database ;
var form , game , question
var score=0
var optionA,optionB
var QBox , correctAns
var questionCounter, total;
var startButton, nextButton
var gameState="start"
 
function setup(){


    database = firebase.database();
    //createCanvas(500,500);
question= new Question();
  scoreBox= createElement('h2')
  scoreBox.position(500,100)
    QBox= createElement("h2")
    QBox.position(200,200)
    optionA= createButton("")
    optionA.position(350,350)
    optionA.hide();
    optionB= createButton("")
    optionB.position(550,350)
    optionB.hide()
    questionCounter=1;
    total =5;
    

    


game = new Game()

if(gameState==="start")    
    game.start()


}

function draw()
        {
                if(gameState==="play")
                {
                    
                    
                    startButton.mousePressed(function()
                        { 
                            
                            optionA.style('background-color','#E5E5E5')
                              optionB.style('background-color','#E5E5E5')
                            optionA.removeAttribute('disabled');
                            optionB.removeAttribute('disabled');
                                showQuestion();
                                questionCounter++
                        })
                }
                 if (gameState==="end")
                {
                   // clear()
                   startButton.hide();
                   QBox.hide();
                   optionA.hide()
                   optionB.hide()
                   fill("red")
                   //console.log("ok")
                 
                   scoreBox.html("Thank You for attempting the quiz!<br> You Score is : " +score)
                    
                }

    
 

        }


  



        


 
function showQuestion()
{
    if(questionCounter<=5)
    {
        question.getQuestion()
        question.getOptionA()
        question.getOptionB()
       question.getCorrect()
        optionB.mousePressed(function()
        {
            
            if (optionB.html()===correctAns)
            {
                optionA.style('background-color','red')
                optionB.style('background-color','green')
              
                score++

            }
            else{
                optionA.style('background-color','green')
                optionB.style('background-color','red')
            }
            optionB.attribute('disabled', '');
            optionA.attribute('disabled', '');
        }) 
        optionA.mousePressed(function()
        {
            
            if (optionA.html()===correctAns)
            {
                optionB.style('background-color','red')
                optionA.style('background-color','green')
               
               optionA.disabled = true
                score++
                console.log(score)
                clear()

            }
            else{
                optionB.style('background-color','green')
                optionA.style('background-color','red')
            }
            optionA.attribute('disabled', '');
            optionB.attribute('disabled', '');
        })

            }
            else if(questionCounter>5)
            gameState="end"
        }








