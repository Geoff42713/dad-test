input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("OFF")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(421)
basic.forever(function () {
	
})
