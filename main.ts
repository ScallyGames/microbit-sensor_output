serial.redirectToUSB()
loops.everyInterval(100, function () {
    serial.writeLine("Humidity" + pins.analogReadPin(AnalogReadWritePin.P2))
})
