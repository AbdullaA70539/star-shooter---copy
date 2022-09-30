controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 9 9 9 9 . . 
        . . . . . . . . . 9 9 9 5 9 . . 
        . . . . . . . 9 9 9 5 5 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . 9 9 9 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let Enemyship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    4 . . . . . . . . . . . . . . . 
    . 4 4 6 6 6 . . . . . . . . . . 
    . . 4 6 6 6 6 . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . . . a 6 6 6 6 6 6 a . . . 
    . . . . a 8 8 8 8 8 8 8 8 a . . 
    . . . . . a 6 6 6 6 6 6 a . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . 4 6 6 6 6 . . . . . . . . . 
    . 4 4 6 6 6 . . . . . . . . . . 
    4 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    Enemyship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 f . . . . 
        . . . . . . . . . 2 f f . . . . 
        . . . . . . . 2 2 f f 2 . . . . 
        . . . . 2 2 2 2 f f f 2 . . . . 
        f 2 2 2 2 f f f f f f 2 . . . . 
        2 f f f f f f f f f f f . . . . 
        f 2 2 2 2 f f f f f f 2 . . . . 
        . . . . 2 2 2 2 f f f 2 . . . . 
        . . . . . . . 2 2 f f 2 . . . . 
        . . . . . . . . . 2 f f . . . . 
        . . . . . . . . . . 2 f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Enemyship.x = scene.screenWidth()
    Enemyship.vx = -20
    Enemyship.y = randint(10, scene.screenHeight() - 10)
})
