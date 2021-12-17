enum RadioMessage {
    message1 = 49434,
    stop = 61268
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    control.waitMicros(1000)
    basic.showString("Going Down... Please wait!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showString("Screen cleared, lift disabled.")
    control.waitMicros(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    control.waitMicros(1000)
    basic.showString("Going up... Please wait!")
})
