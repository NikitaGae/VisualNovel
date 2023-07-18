namespace VisualNovel {
    export async function standUp(): ƒS.SceneReturn {

        let text = {
            Narrator: {
                N0001: "Der Protagonist hat das Zimmer gefunden und überlegt jetzt, was er tun soll? Soll er die Mysteriöse Person ansprechen oder einfach nur kurz schauen und wieder gehen.",
                N0002: "Der Protagonist fasst seinen ganzen Mut zusammen und spricht die Person an von hinten sieht sie wie ein Mädchen seines alters aus.",
                N0003: "Sara kippt um und wird bewusstlos daraufhin kommt der Krankenwagen und Sara wird ins Krankenhaus gebracht."
            },

            Protagonist: {
                P0001: "eh … Hallo … du kannst ziemlich gut Klavier spielen.",
                P0002: "Sorry … mir ist nur dein Klavierspiel aufgefallen schon war ich hier … ich heiße",
                P0003: "Was du eine Anfängerin? Dafür hast du aber sehr gut gespielt man hat kaum Fehler gehört und wenn dann hast du sie gut überspielt.",
                P0004: "haha ja ich spiele seit meiner Kindheit meine Eltern haben mich ein bisschen dazu gedrängt.",
            },
            Sara: {
                S0001: ": … danke … puh du hast mich erschrocken ich dachte schon ich kriege jetzt Ärger. Wie heißt du eigentlich?",
                S0002: "Kein Problem ich spiele für den Musikclub und habe gerade ein bisschen geübt, bin noch eine ziemliche Anfängerin, aber ich werde jeden Tag besser.",
                S0003: "haha Dankeschön, das ist mein Lieblingsstück du spielst auch Klavier oder wieso kennst du dich so viel aus?",
                S0004: "Wow wieso bist du dann nie dem Musikcl…",
            },
        };

        // await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);
        await ƒS.Location.show(locations.dreiTueren);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);

        let direction;

        let directionsPossibilities = {
            right: "Rechts",
            straight: "Geradeaus",
            left: "Links"
        };

        let solution: string[] = [directionsPossibilities.straight, directionsPossibilities.right, directionsPossibilities.left, directionsPossibilities.right, directionsPossibilities.straight, directionsPossibilities.straight, directionsPossibilities.right]
        let solutionCounter: number = 0;

        ƒS.Sound.fade(sound.beethoven_mvt1_rechts, 0, 0, true);
        //await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);

        while (solutionCounter < solution.length) {

            direction = await ƒS.Menu.getInput(directionsPossibilities, "decisionClass");

            switch (direction) {

                case directionsPossibilities.right:
                    if (directionsPossibilities.right === solution[solutionCounter]) {
                        solutionCounter++;
                        changeMusic("Rechts");
                    } else {
                        solutionCounter = 0;
                    }
                    break;

                case directionsPossibilities.straight:
                    if (directionsPossibilities.straight === solution[solutionCounter]) {
                        solutionCounter++;
                        changeMusic("Geradeaus");
                    } else {
                        solutionCounter = 0;
                    }
                    break;

                case directionsPossibilities.left:
                    if (directionsPossibilities.left === solution[solutionCounter]) {
                        solutionCounter++;
                        changeMusic("Links");
                    } else {
                        solutionCounter = 0;
                    }
                    break;
            }
        }

        await ƒS.Location.show(locations.musicClub);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        ƒS.Sound.fade(sound.beethoven_mvt1_links, 0, 0, true);
        ƒS.Sound.fade(sound.beethoven_mvt1_rechts, 0, 0, true);
        ƒS.Sound.fade(sound.beethoven_mvt1, 0, 0, true);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0001);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.open, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0001);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.smile, animate("rightOut"));
        await ƒS.Character.hide(characters.sara);
        await ƒS.update();

        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0002 + " " + dataForSave.nameProtagonist);

        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.smile, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0002);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0003);
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0003);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0004);
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0004);
        await ƒS.Character.animate(characters.sara, characters.sara.pose.open, animate("rightOut"));
        await ƒS.Character.hide(characters.sara);
        await ƒS.update();
        ƒS.Sound.fade(sound.ambulance, 0.3, 0, true);
        await ƒS.Speech.tell("", "");
        ƒS.Sound.fade(sound.ambulance, 0, 0, true);
        return "chapterTwo";

        async function changeMusic(_direction: string): Promise<void> {

            console.log("Changed Music - " + _direction)

            if (_direction == "Links") {
                ƒS.Sound.fade(sound.beethoven_mvt1_links, 0.3, 0, true);
                ƒS.Sound.fade(sound.beethoven_mvt1_rechts, 0, 0, true);
            } else if (_direction === "Rechts") {
                ƒS.Sound.fade(sound.beethoven_mvt1_rechts, 0.3, 0, true);
                ƒS.Sound.fade(sound.beethoven_mvt1_links, 0, 0, true);
            } else {
                ƒS.Sound.fade(sound.beethoven_mvt1_links, 0, 0, true);
                ƒS.Sound.fade(sound.beethoven_mvt1_rechts, 0, 0, true);
            }

        }

    }
}
