while True:
    print("sound_level:" + input.sound_level())
    if input.sound_level() >= 130:
        light.show_animation(light.rainbowAnimation, 1000)
    else:
        light.clear()