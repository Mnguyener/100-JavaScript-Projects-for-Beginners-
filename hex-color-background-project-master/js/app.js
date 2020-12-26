let clickMeBtn = document.getElementById("btn");

let bgHexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


clickMeBtn.addEventListener("click", clickHexColor);

function clickHexColor() {
    let bodyElement = document.body

    let hexValue = document.getElementById("hex-value");
    
        let hex = '#'

        for (let i = 0; i < 6; i++) {
            let randomFloat = (Math.random() * bgHexColor.length);
            let randomWholeNum = Math.floor(randomFloat);
            let randomHexColor = bgHexColor[randomWholeNum];
            

        

           hex += randomHexColor;
       
    }
    hexValue.textContent = hex;
    bodyElement.style.backgroundColor = hex;
    
    

    
    
   
    
  
}
        
        
    
    
 




