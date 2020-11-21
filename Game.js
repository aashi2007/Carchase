class Game
{
    constructor()
    {

    }
    getState()
    {
       var gameStateref = database.ref('gameState')
       //create a listener and read the data through a anonymous function
       gameStateref.on("value",function(data)
       {
           gameState = data.val();
       });
       
    }
    update(state)
    {
        database.ref('/').update
        ({
            gameState:state
        });
    }
    start()
    {
        if(gameState === 0)
        {
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
    }
     
}


