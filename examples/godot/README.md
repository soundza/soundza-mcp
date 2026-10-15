# Godot

With the Soundza MCP connected, ask your agent:

> Add a coin pickup sound and a jump sound to my Godot game. Save them in res://audio/sfx and play them from Player.gd.

It searches Soundza, downloads the WAVs and wires them up, roughly like this:

```gdscript
@onready var coin_sfx: AudioStreamPlayer = $CoinSfx
@onready var jump_sfx: AudioStreamPlayer = $JumpSfx

func _ready() -> void:
    coin_sfx.stream = load("res://audio/sfx/coin_pickup.wav")
    jump_sfx.stream = load("res://audio/sfx/jump.wav")

func jump() -> void:
    velocity.y = JUMP_VELOCITY
    jump_sfx.play()

func collect_coin() -> void:
    coin_sfx.play()
```
