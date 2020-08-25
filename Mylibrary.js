//Detecting collision
function isTouching(laptop, charger){
  
    //Distance between the centres of the objects < sum of half their widths
    if (laptop.x - charger.x < charger.width/2 + laptop.width/2
        && charger.x - laptop.x < charger.width/2 + laptop.width/2
        && laptop.y - charger.y < charger.height/2 + laptop.height/2
        && charger.y - laptop.y < charger.height/2 + laptop.height/2) {
          
          //yes, they are touching - true
          return true;
    }
    else {
          //No, they aren't touching - false
          return false;
    }
  }
  
  
  function bounce(a,b)  {
    if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2){
          a.velocityX = a.velocityX *(-1);
          b.velocityX = b.velocityX *(-1);
    }
  
    if(a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2) {
        a.velocityY = a.velocityY *(-1);
        b.velocityY = b.velocityY *(-1);
      } 
  }