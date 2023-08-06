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
        const { x, y } = utils.nextPosition(currentX, currentY, direction);
        const gridCoords = utils.asGridCoords(x, y);
        return this.walls[gridCoords] || false;
      }
      

    // isSpaceTaken(currentX, currentY, direction) {
    //     const {x,y} = utils.nextPosition(currentX, currentY, direction);
    //     return this.walls[`${x},${y}`] || false;
    // }
}

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
        
const collision_room1 = [1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816,
    1816, 0, 0, 0, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816,
    1816, 1816, 1816, 1816, 1816, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 0, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 0, 0, 1816, 1816, 1816, 1816, 0, 0, 0, 0, 1816,
    1816, 1816, 1816, 0, 0, 0, 1816, 0, 1816, 1816, 0, 0, 0, 0, 0,
    1816, 0, 1816, 0, 0, 0, 1816, 1816, 1816, 0, 0, 0, 0, 0, 0,
    1816, 0, 0, 0, 0, 0, 1816, 1816, 0, 0, 0, 0, 0, 1816, 1816,
    1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816, 1816,
    1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1816,
    1816, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 1816, 1816, 0, 0, 1816,
    1816, 0, 0, 0, 0, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 0, 0, 1816,
    1816, 0, 0, 0, 0, 1816, 0, 0, 0, 0, 0, 1816, 0, 0, 1816,
    1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816, 1816];
        
for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 15; x++) {
        const symbol = collision_room1[y * 15 + x];
        if (symbol === 1816) {
            OverworldMaps.Room1.walls[utils.asGridCoords(x, y)] = true;
            }
          }
        }