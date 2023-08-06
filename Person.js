// class Person extends GameObject {
//     constructor(config) {
//       super(config);
//     //   this.position = {
//     //     x: 200,
//     //     y: 200,
//     //   }
//       this.movingProgressRemaining = 0;
  
//       this.isPlayerControlled = config.isPlayerControlled || false;
  
//       this.directionUpdate = {
//         "up": ["y", -1],
//         "down": ["y", 1],
//         "left": ["x", -1],
//         "right": ["x", 1],
//       }
//     }
  
//     update(state) {
//         if (this.movingProgressRemaining > 0) {
//           this.updatePosition();
//         } else {
    
//           //More cases for starting to walk will come here
//           //
//           //
    
//           //Case: We're keyboard ready and have an arrow pressed
//           if (this.isPlayerControlled && state.arrow) {
//             this.startBehavior(state, {
//               type: "walk",
//               direction: state.arrow
//             })
//           }
//           this.updateSprite(state);
//         }
//       }
    
  
//     startBehavior(state, behavior) {
//         //Set character direction to whatever behavior has
//         this.direction = behavior.direction;
//         if (behavior.type === "walk") {
//             //Stop here if space is not free
//             if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
//                 return;
//             }
//             //Ready to walk!
//             //state.map.moveWall(this.x, this.y, this.direction);
//             this.movingProgressRemaining = 32;
//         }
//     }
  
//     updatePosition() {
      
//         const [property, change] = this.directionUpdate[this.direction];
//         this[property] += change;
//         this.movingProgressRemaining -= 1;
//     }

//     updateSprite() {
//         if (this.movingProgressRemaining > 0) {
//           this.sprite.setAnimation("walk-"+this.direction);
//           return;
//         }
//         this.sprite.setAnimation("idle-"+this.direction);    
//     }
// }

class Person extends GameObject {
    constructor(config) {
      super(config);
  
      this.movingProgressRemaining = 0;
  
      this.isPlayerControlled = config.isPlayerControlled || false;
  
      this.directionUpdate = {
        "up": ["y", -1],
        "down": ["y", 1],
        "left": ["x", -1],
        "right": ["x", 1],
      };
  
      this.walls = config.walls || {}; // Add walls property and initialize it with the walls object
    }
  
    update(state) {
      if (this.movingProgressRemaining > 0) {
        this.updatePosition();
      } else {
        // More cases for starting to walk will come here
        // ...
  
        // Case: We're keyboard ready and have an arrow pressed
        if (this.isPlayerControlled && state.arrow) {
          this.startBehavior(state, {
            type: "walk",
            direction: state.arrow,
          });
        }
        this.updateSprite(state);
      }
    }
  
    startBehavior(state, behavior) {
      // Set character direction to whatever behavior has
      this.direction = behavior.direction;
      if (behavior.type === "walk") {
        // Stop here if space is not free
        if (this.isSpaceTaken(this.direction)) {
          return;
        }
        // Ready to walk!
        // state.map.moveWall(this.x, this.y, this.direction);
        this.movingProgressRemaining = 32;
      }
    }
  
    updatePosition() {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  
    updateSprite() {
      if (this.movingProgressRemaining > 0) {
        this.sprite.setAnimation("walk-" + this.direction);
      } else {
        this.sprite.setAnimation("idle-" + this.direction);
      }
    }
  
    isSpaceTaken(direction) {
      const { x, y } = utils.nextPosition(this.x, this.y, direction);
      const gridCoords = utils.asGridCoords(x, y);
      return this.walls[gridCoords] || false;
    }
  }
