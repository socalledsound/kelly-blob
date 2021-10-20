class Background{
    constructor(image){
        this.image = image
    }
    
    render(){
        image(this.image, 0, 0)
    }
}