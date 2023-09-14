control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
control.onEvent(1, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
})
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P0, PinEventType.Edge)
