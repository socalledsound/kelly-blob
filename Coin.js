class Coin {
  constructor(images, {x,y}, size){
    this.x = x
    this.y = y
    this.size = size
    this.images = images
    this.imageCounter = 0
  }
  
  render(){
    image(this.images[this.imageCounter % (this.images.length - 1)], this.x, this.y, this.size, this.size)
    
  }

  update(){
    this.imageCounter++
  }
}