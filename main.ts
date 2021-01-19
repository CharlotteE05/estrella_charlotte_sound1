while (true) {
    console.log("sound_level:" + input.soundLevel())
    if (input.soundLevel() >= 130) {
        light.showAnimation(light.rainbowAnimation, 1000)
    } else {
        light.clear()
    }
    
}
