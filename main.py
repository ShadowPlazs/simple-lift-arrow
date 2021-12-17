def on_gesture_shake():
    music.play_melody("C G D A C C5 A E ", 120)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
