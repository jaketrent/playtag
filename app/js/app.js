var game
var sprite
var gameOverText

function preload() {
  game.load.image('ship', 'img/ship.png')
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'ship')
  sprite.anchor.set(0.5)
  sprite.scale.x = .15
  sprite.scale.y = .15

  game.physics.arcade.enable(sprite)

  sprite.body.collideWorldBounds = true
}

function update() {
  if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
    game.physics.arcade.moveToPointer(sprite, 300)
  } else {
    sprite.body.velocity.set(0)
    gameOver()
  }
}

function gameOver() {
  gameOverText = game.add.text(game.world.centerX, game.world.centerY, "Gotcha!", { font: "65px Arial", fill: "#ff0044", align: "center" });
  gameOverText.anchor.setTo(0.5, 0.5);
  game.paused = true
}

function render() {
  game.debug.inputInfo(32, 32)
}

var state = {
  preload: preload,
  create: create,
  update: update,
  render: render
}

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

game = new Phaser.Game(w, h, Phaser.AUTO, 'phaser-example', state)