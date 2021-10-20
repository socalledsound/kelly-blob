class Game {
    constructor(images, sounds){
        this.images = images
        this.sounds = sounds
        this.blobImages = loadBlobImages(this.images.blobSprite)
        this.coinImages = loadCoinImages(this.images.coinSprite)
        this.numCoins = gameSettings.numCoins
        this.started = false
        this.over = false
        this.bloby = new BlobChar(this.blobImages, {x: gameSettings.blobyStartX, y: gameSettings.blobyStartY}, gameSettings.blobySize)
        this.coins = Array.from({ length: gameSettings.numCoins}, (el, i) => {
            return new Coin(this.coinImages, { x: gameSettings.coinSize + gameSettings.coinSize * i, y: gameSettings.coinLevel }, gameSettings.coinSomething)
        })
        this.background = new Background(this.images.bg)
        this.scoreboard = new Scoreboard()
        this.startButton = createButton('start')
        this.startButton.mousePressed(this.init)
        this.startScreen = new Overlay('play blob', 'use arrow buttons to move', this.startButton)
        this.gameOverScreen = new Overlay('game over!', 'start again?', this.startButton)
   
    }

    init = () => {
        if(!this.started){
            this.coins = Array.from({ length: gameSettings.numCoins}, (el, i) => {
                        return new Coin(this.coinImages, { x: gameSettings.coinSize + gameSettings.coinSize * i, y: gameSettings.coinLevel }, gameSettings.coinSomething)
            })
            this.bloby = new BlobChar(this.blobImages, {x: gameSettings.blobyStartX, y: gameSettings.blobyStartY}, gameSettings.blobySize)
            this.started = true
            this.startButton.hide()
        }

    }


    render(){
        this.background.render()
        this.scoreboard.render()
        this.coins.forEach(coin => coin.render())
        if(this.bloby){
             this.bloby.render()
        }
        if(!this.started && !this.over){
            this.startScreen.render()
        }
        if(this.over){
            this.gameOverScreen.render()
        }
    }

    update(){
        // game over state
        if(this.started && !this.over){
            this.bloby.update()
            this.coins.forEach(coin => coin.update())
        }
    }
}
