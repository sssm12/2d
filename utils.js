const utils = {
    withGrid(n) {
      return n * 32;
    },

    // asGridCoords(x,y) {
    //     return `${x*32},${y*32}`
    
    // },

    // utils.js


    asGridCoords(x,y) {
        return `${x},${y}`
    
    },
  

    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        const size = 32;
        if (direction === "left") { 
            x -= size;
        } else if (direction === "right") {
            x += size;
        } else if (direction === "up") {
            y -= size;
        } else if (direction === "down") {
            y += size;
        }
        return {x,y};
    }
            
  }

