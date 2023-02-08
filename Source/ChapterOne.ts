namespace VisualNovel {
    export async function ChapterOne(): ƒS.SceneReturn {
        console.log("Chapter 1");

        let text = {
            Narrator: {
                N0001: "Der Protagonist sitzt im Klassenraum schaut aus dem Fenster und träumt vor sich her, es ist ein angenehmer Sommertag, der Himmel ist frei von Wolken.",
                N0002: "Protagonist hatte einen langen Schultag und es ist kurz vor Abenddämmerung als er plötzlich ein leichtes Klavierspiel hört.",
                N0003: "Er fängt an immer mehr dem Klavierspiel zu lauschen, anstatt dem Lehrer zuzuhören.",
                N0004: "Der Protagonist bleibt einfach sitzen kurz darauf hört das Klavierstück auf.",
                N0005: "Der Protagonist meldet sich…",
                N0006: "Du stehst auf und begibst dich direkt auf die Suche, woher die bezaubernde Musik kommt.",
                N0007: "Der Protagonist hat das Zimmer gefunden und überlegt jetzt, was er tun soll? Soll er die Mysteriöse Person ansprechen oder einfach nur kurz schauen und wieder gehen.",
                N0008: "Der Protagonist bereut es die Person nicht angesprochen zu haben, denn er würde gerne wieder ein Stück hören, was mit so viel Liebe erfüllt, ist.",
                N0009: "Der Protagonist fasst seinen ganzen Mut zusammen und spricht die Person an von hinten sieht sie wie ein Mädchen seines alters aus.",
                N0010: "Sara kippt um und wird bewusstlos daraufhin kommt der Krankenwagen und Sara wird ins Krankenhaus gebracht."
            },

            Protagonist: {
                P0001: "Es ist zwar ein leichtes Stück aber diese Person spielt es mit liebe, wer sowas wohl spielen mag? Vielleicht ein bezauberndes Mädchen?",
                P0002: "Kann ich kurz aufs klo?",
                P0003: "Es geht mir nicht gut könnte ich zum Schularzt?",
                P0004: "eh … Hallo … ",
                P0005: "Sorry … mir ist nur dein Klavierspiel aufgefallen schon war ich hier …",
                P0006: "Was du eine Anfängerin? Dafür hast du aber sehr gut gespielt man hat kaum Fehler gehört und wenn dann hast du sie gut überspielt.",
                P0007: "haha ja ich spiele seit meiner Kindheit meine Eltern haben mich ein bisschen dazu gedrängt.",
            },

            HerrYamamoto: {
                L0001: "Es ist kurz vor Schluss kannst du nicht noch bisschen warten? Aber ich will ja nicht so sein."
            }
        };

        let toilletOrDoc = {
            toillet: "Man sagt man muss kurz aufs Klo",
            doc: "Es geht mir nicht gut könnte ich zum Schularzt"
        };

        //dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        //  + " " + dataForSave.nameProtagonist
        //await ƒS.Sound.play(sound.cicada, 0.1, true);
        ƒS.Sound.fade(sound.cicada, 0.1, 2, true);
        await ƒS.Location.show(locations.classroom);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
        await ƒS.Sound.play(sound.cicada, 0.0, true);
        await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0001);
        await ƒS.update();
        ƒS.Speech.clear();
        let dialogueElement;
        let toilletOrDocElement;

        let ignoreOrStandUP = {
            ignore: "Einfach sitzen bleiben",
            interefere: "Versuchen aus dem Unterricht zu entkommen"
        };

          dialogueElement = await ƒS.Menu.getInput(ignoreOrStandUP, "decisionClass");

        switch(dialogueElement) {
            case ignoreOrStandUP.ignore:
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
                await ƒS.Speech.hide();
                await ƒS.update();
                await ƒS.Speech.hide();
                return "endSit"
            case ignoreOrStandUP.interefere:
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
                toilletOrDocElement = await ƒS.Menu.getInput(toilletOrDoc, "decisionClass");

                switch(toilletOrDocElement) {
                    case toilletOrDoc.toillet:
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0002);
                        await ƒS.update();
                        await ƒS.Character.show(characters.herrYamamoto, characters.herrYamamoto.pose.happy, newPositions.bottomright);
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await ƒS.update();
                        await ƒS.Character.hide(characters.herrYamamoto);
                        await ƒS.update();
                        return "standUp"
                    case toilletOrDoc.doc:
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0003);
                        await ƒS.update();
                        await ƒS.Character.show(characters.herrYamamoto, characters.herrYamamoto.pose.happy, newPositions.bottomright);
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await ƒS.update();
                        await ƒS.Character.hide(characters.herrYamamoto);
                        await ƒS.Speech.hide();
                        await ƒS.update();
                        return "standUp"
                }
                return "standUp"                
        };
    }
}