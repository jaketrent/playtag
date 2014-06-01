var game
var sprite

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
}

function update() {
  if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8) {
    game.physics.arcade.moveToPointer(sprite, 300)
  } else {
    sprite.body.velocity.set(0)
  }
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

game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', state)