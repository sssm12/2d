class OverworldMap {
    constructor(config) {
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {};
  
      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;
    }
  
    drawLowerImage(ctx) {
      ctx.drawImage(this.lowerImage, 0, 0)
    }
  
    drawUpperImage(ctx) {
      ctx.drawImage(this.upperImage, 0, 0)
    } 



    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }
}




//const walls = {};

const tileWidth = 32;
const tileHeight = 32;

window.OverworldMaps = {
  Room1: {
    lowerSrc: "img/background/room1.png",
    upperSrc: "img/background/room1_upper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
    },
    walls: {}, // Walls object inside Room1
  },
  Room2: {
    lowerSrc: "img/background/room2.png",
    upperSrc: "img/background/room2_upper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 5,
      }),
    },
  },
};

// Populate the walls object for Room1
const collision_room1 = [ [1816, 1816, 1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 0,
    0, 1816, 1816, 1816, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1816, 1816, 1816, 1816, 0, 0, 0, 0, 0,
    0, 1816, 1816, 0, 0, 0, 1816, 0, 1816, 1816, 0, 0, 0, 0, 0,
    0, 0, 1816, 0, 0, 0, 1816, 1816, 1816, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 1816, 1816, 0, 0, 0,
    0, 0, 0, 0, 0, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 0, 0, 0,
    0, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 0, 1816, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ];

for (let y = 0; y < 18; y++) {
  for (let x = 0; x < 15; x++) {
    const symbol = collision_room1[y * 15 + x];

    if (symbol === 1816) {
      OverworldMaps.Room1.walls[utils.asGridCoords(x, y)] = true;
    }
  }
}



//ORIGINSL

class OverworldMap {
    constructor(config) {
      this.gameObjects = config.gameObjects;
      this.walls = config.walls || {};
  
      this.lowerImage = new Image();
      this.lowerImage.src = config.lowerSrc;
  
      this.upperImage = new Image();
      this.upperImage.src = config.upperSrc;
    }
  
    drawLowerImage(ctx) {
      ctx.drawImage(this.lowerImage, 0, 0)
    }
  
    drawUpperImage(ctx) {
      ctx.drawImage(this.upperImage, 0, 0)
    } 



    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }
}



  window.OverworldMaps = {
    Room1: {
      lowerSrc: "img/background/room1.png",
      upperSrc: "img/background/room1_upper.png",
      gameObjects: {
        hero: new Person({
            isPlayerControlled: true,
            x: utils.withGrid(5),
            y: utils.withGrid(6),
        }),
      }, 
    walls: {


        //"16, 16": true

       // [utils.asGridCoords(2,7)] : true,
        [utils.asGridCoords(2,8)] : true,
    //     [utils.asGridCoords(2,9)] : true,
    //     [utils.asGridCoords(1,9)] : true,
    //     [utils.asGridCoords(1,8)] : true,

    //     [utils.asGridCoords(6,7)] : true,
    //     [utils.asGridCoords(6,8)] : true,
    //     [utils.asGridCoords(6,9)] : true,
    //     [utils.asGridCoords(6,10)] : true,

    //     [utils.asGridCoords(7,7)] : true,
    //     [utils.asGridCoords(7,8)] : true,
    //     [utils.asGridCoords(7,9)] : true,
    //     [utils.asGridCoords(7,10)] : true,

    //     [utils.asGridCoords(8,7)] : true,
    //     [utils.asGridCoords(8,8)] : true,
    //     [utils.asGridCoords(8,9)] : true,
    //    // [utils.asGridCoords(8,10)] : true,

    //     [utils.asGridCoords(9,6)] : true,
    //     [utils.asGridCoords(9,7)] : true,
    //     [utils.asGridCoords(9,8)] : true,



      }
    },
    Room2: {
      lowerSrc: "img/background/room2.png",
      upperSrc: "img/background/room2_upper.png",
      gameObjects: {
        hero: new GameObject({
          x: 3,
          y: 5,
        }),
      }
    },
  }
