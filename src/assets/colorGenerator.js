export function lightOrDark(colorList) {

    for (let i = 0; i < colorList.length; i++) {
    
        color = color[i].match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  
        r = color[1];
        g = color[2];
        b = color[3];
        
        hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b) );

        if (hsp>127.5) {
            return true;
        } 
      }  

      return false;
  };