

class Game
{
    constructor()
    {
        
    }

start()
{
    if (gameState==="start")
                {
                    startButton= createButton("Start Quiz")
                   
                    startButton.mousePressed(()=>
                    {
                        optionA.show();
                        optionB.show();
                        gameState="play";
                        showQuestion();

                        startButton.html("NExt Q")
                        questionCounter++
                    })
                }
                
}

}
