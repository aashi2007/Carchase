class Form
{
    constructor()
    {

    }
 
    display()
    {
        var title = createElement('h2');
        title.html("CAR CHASE");
        title.position(350, 0);
        var Input = createInput("Enter Name")
        Input.position(350, 150);
        var Button = createButton("READY");
        Button.position(350, 350);
        
        var Greeting = createElement('h3');
        
        Button.mousePressed(function(){
           Input.hide();
           Button.hide();
           var Name = Input.value();          
           playerCount = playerCount+1;
           player.update(Name)
           player.updateCount(playerCount)
           Greeting.html("Hello"+Name);
           Greeting.position(350, 200);
        })
    }
}


//to give heading createElement headings: h1 to h6
// to create textbox createInput
//to create button createButton