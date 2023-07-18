namespace VisualNovel {
    export async function chapterTwo(): ƒS.SceneReturn {
        console.log("Chapter 2");

        let text = {
            Narrator: {
                N0001: "Ein Tag ist vergangen, nachdem Sara ins Krankenhaus gegangen ist.",
                N0002: "Man geht zum Lehrer und fragt, ob man die Schülerkarte zu ihr bringen kann",
                N0003: "Der Protagonist begibt sich daraufhin auf den Weg zu Sara.",
                N0004: "Die Mutter macht die Tür auf. Und schaut verwundert.",
            },

            Protagonist: {
                P0001: "Ob es Sara wohl gut geht, vielleicht sollte ich mal im Musikzimmer vorbeischauen, vielleicht ist sie wieder dort.",
                P0002: "Entschuldigen sie Herr Yamamoto ich habe diese Schülerkarte im Musikzimmer gefunden kann ich sie ihr Persönlich vorbeibringen? Jedoch weiß ich nicht, wo sie wohnt.",
                P0003: "Danke sehr Herr Yamamoto.",
                P0004: "Hmmm … ich sollte glaube ich erst mal mit dem Zug eine Station fahren dann kann ich laufen.",
                P0005: "Das Haus sollte es sein, sieht luxuriös aus … bin bisschen nervös jetzt geworden … okay erstmal klingeln",
                P0006: "Hallo ich habe die Schülerkarte von Sara dabei.",
                P0007: "Wie geht es Sara nach dem Vorfall?",
                P0008: "Oh ja sehr gerne!",
                P0009: "Alles klar bis morgen!"
            },

            Mutter: {
                M0001:"Ahh bist du der Junge, der mit Sara im Musikzimmer war, vielen Dank für deine Hilfe!",
                M0002: "Ihr geht es heute besser! Wenn du magst, kannst du morgen vorbeischauen",
                M0003: "Du kannst morgen nach der Schule vorbeikommen ich sag ihr bescheid."
            },

            HerrYamamoto: {
                L0001: "Hast du nicht letztens erst für sie Hilfe gerufen? Klar kannst du es ihr vorbeibringen kannst direkt ein Krankheitsbesuch draus machen. Ich schreib dir ihre Adresse auf.",

            }
        };
        await ƒS.Location.show(locations.classroom);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0001);
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + "begibt sich auf den Weg in das Musikzimmer. Was findet man?");
        await ƒS.update();
        await ƒS.Location.show(locations.musicClub);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " nach einem kurzen Blick in den Musikzimmer findet man die Schülerkarte von Sara auf dem Boden");
        ƒS.Inventory.add(items.studendCard);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
        await ƒS.update();
        ƒS.Sound.fade(sound.talking, 0.3, 0, true);
        await ƒS.Location.show(locations.schulgang);
        await ƒS.update();
        await ƒS.Character.animate(characters.herrYamamoto, characters.herrYamamoto.pose.happy, animate("outToRight"));
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0002);
        await ƒS.Speech.tell(characters.herrYamamoto, text.HerrYamamoto.L0001);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0003);
        await ƒS.Character.animate(characters.herrYamamoto, characters.herrYamamoto.pose.happy, animate("rightOut"));
        await ƒS.Character.hide(characters.herrYamamoto);
        ƒS.Sound.fade(sound.talking, 0.0, 0, true);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
        await ƒS.update();
        await ƒS.Location.show(locations.vorDemHausVonSara);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0005);
        ƒS.Sound.fade(sound.doorbell, 0.3, 0, true);
        await ƒS.update(2);
        ƒS.Sound.fade(sound.doorbell, 0.0, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.door, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.door, 0.0, 0, true);
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0006);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0001);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0007);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0002);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0008);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0003);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0009);
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
        await ƒS.Character.hide(characters.mutter);
        await ƒS.update();
        return "chapterThree"
        };
    }