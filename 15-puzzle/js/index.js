var blankIndex; 
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function startGame() {
    shuffle(numbers);
    for(var i=0; i < 16; i++) {
        var curr = document.getElementById(i);
        if(numbers[i] == 16) {
            blankIndex = i;
            curr.className = "blank";
            curr.innerHTML = "";
            
        }
        else
            curr.innerHTML = numbers[i];
    }

}

/*
* Shuffling algorithm of Fisher-Yates - taken from Stack Overflow. 
*/
function shuffle (array) {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//game play:
function play(e){
  if(e.id!=blankIndex+''){
    var curr=Number(e.id); 
    var currRow=Math.floor(curr/4); 
    var currCol=curr%4; 
    
    var blankRow=Math.floor(blankIndex/4);
    var blankCol=blankIndex%4;

    
    if(blankRow==currRow){
      var moves=Math.abs(blankCol-currCol);
      for(var i=0; i<moves; i++){
        document.getElementById(blankIndex).className="tile";
        if(blankCol-currCol>1){
          var tempID=blankIndex-1; 
          var temp=document.getElementById(tempID);
          document.getElementById(blankIndex).innerHTML=temp.innerHTML; 
          temp.className="blank";
          temp.innerHTML='';
          blankIndex=tempID; 
        }
        
        else if(blankCol-currCol<-1){
          var tempID=blankIndex+1; 
          var temp=document.getElementById(tempID);
          document.getElementById(blankIndex).innerHTML=temp.innerHTML; 
          temp.className="blank";
          temp.innerHTML='';
          blankIndex=tempID;     
        }
        
        else if(moves==1){
          document.getElementById(blankIndex).innerHTML=e.innerHTML;
          e.className="blank";
          e.innerHTML='';
          blankIndex=curr;
        }
      }      
    }
    
    if(blankCol==currCol){
      var moves=Math.abs(blankRow-currRow);
      for(var i=0; i<moves; i++){
        document.getElementById(blankIndex).className="tile";
        if(blankRow-currRow>1){
          var tempID=blankIndex-4; 
          var temp=document.getElementById(tempID);
          document.getElementById(blankIndex).innerHTML=temp.innerHTML; 
          temp.className="blank";
          temp.innerHTML='';
          blankIndex=tempID;     
        }
        
        else if(blankRow-currRow<-1){
          var tempID=blankIndex+4; 
          var temp=document.getElementById(tempID);
          document.getElementById(blankIndex).innerHTML=temp.innerHTML; 
          temp.className="blank";
          temp.innerHTML='';
          blankIndex=tempID;   
        }
        
        else if(moves==1){
          document.getElementById(blankIndex).innerHTML=e.innerHTML;
          e.className="blank ";
          e.innerHTML='';
          blankIndex=curr;
        }
      }      
    }
  } 
 }