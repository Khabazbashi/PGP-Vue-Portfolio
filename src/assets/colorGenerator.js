
 export function lightOrDark(colorList) {

    let color;
    for (let i = 0; i < 4; i++) {
    
        color = colorList[i];
        let r = parseInt(`${color[1]}${color[2]}`,16)
        let g = parseInt(`${color[3]}${color[4]}`,16)
        let b = parseInt(`${color[5]}${color[6]}`,16)
        
        let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b) );

        if (hsp<180) {
        
            return color;
        } 
      }  
      return "#A26067";
  };
 
 

