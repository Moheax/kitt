input.onButtonPressed(Button.A, function () {
    pong = game.createSprite(0, randint(0, 4))
    pongshadow = game.createSprite(0, pong.get(LedSpriteProperty.Y))
    pongshadow.change(LedSpriteProperty.Brightness, -70)
    move()
})
radio.onReceivedValue(function (name, value) {
    if (name == "pongy") {
        pong = game.createSprite(0, value)
        pongshadow = game.createSprite(0, value)
        pongshadow.change(LedSpriteProperty.Brightness, -70)
        for (let index = 0; index < 4; index++) {
            pong.change(LedSpriteProperty.X, 1)
            basic.pause(500)
            pongshadow.change(LedSpriteProperty.X, 1)
        }
        pong.delete()
        pongshadow.delete()
        pong = game.createSprite(4, randint(0, 4))
        pongshadow = game.createSprite(4, pong.get(LedSpriteProperty.Y))
        pongshadow.change(LedSpriteProperty.Brightness, -70)
        for (let index = 0; index < 4; index++) {
            pong.change(LedSpriteProperty.X, -1)
            basic.pause(500)
            pongshadow.change(LedSpriteProperty.X, -1)
        }
        pong.delete()
        radio.sendValue("pong", pong.get(LedSpriteProperty.Y))
        pongshadow.delete()
    } else {
        pong = game.createSprite(4, value)
        pongshadow = game.createSprite(4, value)
        pongshadow.change(LedSpriteProperty.Brightness, -70)
        for (let index = 0; index < 4; index++) {
            pong.change(LedSpriteProperty.X, -1)
            basic.pause(500)
            pongshadow.change(LedSpriteProperty.X, -1)
        }
        pong.delete()
        pongshadow.delete()
    }
})
function move () {
    for (let index = 0; index < 4; index++) {
        pong.change(LedSpriteProperty.X, 1)
        basic.pause(500)
        pongshadow.change(LedSpriteProperty.X, 1)
    }
    pong.delete()
    radio.sendValue("pongy", pong.get(LedSpriteProperty.Y))
    pongshadow.delete()
}
let pongshadow: game.LedSprite = null
let pong: game.LedSprite = null
radio.setGroup(1)
radio.sendString(".")
basic.forever(function () {
	
})
