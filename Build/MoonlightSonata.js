"use strict";
var VisualNovel;
(function (VisualNovel) {
    async function ChapterOne() {
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
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.cicada, 0.1, 2, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.classroom);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.Sound.play(VisualNovel.sound.cicada, 0.0, true);
        await VisualNovel.ƒS.Sound.play(VisualNovel.sound.beethoven_mvt1, 0.3, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0003);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Speech.clear();
        let dialogueElement;
        let toilletOrDocElement;
        let ignoreOrStandUP = {
            ignore: "Einfach sitzen bleiben",
            interefere: "Versuchen aus dem Unterricht zu entkommen"
        };
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(ignoreOrStandUP, "decisionClass");
        switch (dialogueElement) {
            case ignoreOrStandUP.ignore:
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
                await VisualNovel.ƒS.Speech.hide();
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.hide();
                return "endSit";
            case ignoreOrStandUP.interefere:
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0005);
                toilletOrDocElement = await VisualNovel.ƒS.Menu.getInput(toilletOrDoc, "decisionClass");
                switch (toilletOrDocElement) {
                    case toilletOrDoc.toillet:
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.newPositions.bottomright);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
                        await VisualNovel.ƒS.update();
                        return "standUp";
                    case toilletOrDoc.doc:
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.newPositions.bottomright);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
                        await VisualNovel.ƒS.Speech.hide();
                        await VisualNovel.ƒS.update();
                        return "standUp";
                }
                return "standUp";
        }
        ;
    }
    VisualNovel.ChapterOne = ChapterOne;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function ChapterTwo() {
        console.log("Chapter 2");
        let text = {
            Narrator: {
                N0001: "Ein Tag ist vergangen, nachdem Sara ins Krankenhaus gegangen ist.",
                N0002: "Der Protagonist begibt sich auf den Weg in das Musikzimmer MINISPIEL Was findet man?",
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
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.cicada, 0.1, 2, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.classroom);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.Sound.play(VisualNovel.sound.cicada, 0.0, true);
        await VisualNovel.ƒS.Sound.play(VisualNovel.sound.beethoven_mvt1, 0.3, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0003);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Speech.clear();
        let dialogueElement;
        let toilletOrDocElement;
        let ignoreOrStandUP = {
            ignore: "Einfach sitzen bleiben",
            interefere: "Versuchen aus dem Unterricht zu entkommen"
        };
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(ignoreOrStandUP, "decisionClass");
        switch (dialogueElement) {
            case ignoreOrStandUP.ignore:
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
                await VisualNovel.ƒS.Speech.hide();
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.hide();
                return "endSit";
            case ignoreOrStandUP.interefere:
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0005);
                toilletOrDocElement = await VisualNovel.ƒS.Menu.getInput(toilletOrDoc, "decisionClass");
                switch (toilletOrDocElement) {
                    case toilletOrDoc.toillet:
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.newPositions.bottomright);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
                        await VisualNovel.ƒS.update();
                        return "standUp";
                    case toilletOrDoc.doc:
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.newPositions.bottomright);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
                        await VisualNovel.ƒS.Speech.hide();
                        await VisualNovel.ƒS.update();
                        return "standUp";
                }
                return "standUp";
        }
        ;
    }
    VisualNovel.ChapterTwo = ChapterTwo;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    VisualNovel.ƒ = FudgeCore;
    VisualNovel.ƒS = FudgeStory;
    VisualNovel.transition = {
        swirl: {
            duration: 1,
            alpha: "Assets/Transitions/swirl.png",
            edge: 1
        },
        blink: {
            duration: 3,
            alpha: "Assets/Transitions/blink2.png",
            edge: 1
        },
        u: {
            duration: 3,
            alpha: "Assets/Transitions/9.jpg",
            edge: 1
        },
        uu: {
            duration: 3,
            alpha: "Assets/Transitions/circlewipe-ccw.jpg",
            edge: 1
        },
        uuu: {
            duration: 3,
            alpha: "Assets/Transitions/circlewipe-cw.jpg",
            edge: 1
        },
        uuuu: {
            duration: 3,
            alpha: "Assets/Transitions/cw-side.jpg",
            edge: 1
        }
    };
    VisualNovel.sound = {
        cicada: "Assets/Audio/cicada-sound-64528.mp3",
        sadEnd: "Assets/Audio/Sad_End.mp3",
        happyEnd: "Assets/Audio/Happy_End.mp3",
        beethoven_mvt1: "Assets/Audio/Beethoven_Moonlight_1st_movement.ogg",
        beethoven_mvt2: "Assets/Audio/Beethoven_Moonlight_2nd_movement.ogg",
        beethoven_mvt3: "Assets/Audio/Beethoven_Moonlight_3rd_movement.ogg",
        beethoven_mvt1_rechts: "Assets/Audio/rechts.mp3",
        beethoven_mvt1_links: "Assets/Audio/links.mp3",
        brakes: "Assets/Audio/brake.mp3",
        ambulance: "Assets/Audio/distant-ambulance-siren-6108.mp3"
    };
    VisualNovel.locations = {
        classroom: {
            name: "classroom",
            background: "Assets/Locations/classroom.png"
        },
        endSit: {
            name: "endSit",
            background: "Assets/Locations/endSit.png"
        },
        musicClub: {
            name: "musicClub",
            background: "Assets/Locations/musicclub.png"
        },
        endChapterOne: {
            name: "endChapterOne",
            background: "Assets/Locations/endChapterOne.png"
        },
    };
    VisualNovel.newPositions = {
        bottomleft: new FudgeStory.Position(-470, -540),
        bottomright: new FudgeStory.Position(470, -540),
        bottomcenter: new FudgeStory.Position(0, -540),
        rightout: new FudgeStory.Position(2470, -540),
        leftout: new FudgeStory.Position(-2470, -540)
    };
    VisualNovel.characters = {
        narrator: {
            name: "Narrator"
        },
        protagonist: {
            name: "Ich"
        },
        herrYamamoto: {
            name: "Herr Yamamoto",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Assets/Characters/1.png"
            }
        },
        sara: {
            name: "Sara",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                frown: "Assets/Characters/Miki_PoseD_Summer_Frown.png",
                open: "Assets/Characters/Miki_PoseD_Summer_Open.png",
                shout: "Assets/Characters/Miki_PoseD_Summer_Shout.png",
                smile: "Assets/Characters/Miki_PoseD_Summer_Smile.png",
            }
        },
        mutter: {
            name: "Sara",
            origin: VisualNovel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Assets/Characters/mutter.png"
            }
        },
    };
    let inGameButtons = {
        save: "save",
        load: "load",
        close: "close",
    };
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        switch (_option) {
            case inGameButtons.save:
                await VisualNovel.ƒS.Progress.save();
                break;
            case inGameButtons.load:
                await VisualNovel.ƒS.Progress.load();
                break;
            case inGameButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    VisualNovel.items = {
        name: "",
        description: "",
        static: ""
    };
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VisualNovel.ƒ.KEYBOARD_CODE.F8:
                console.log("save");
                VisualNovel.ƒS.Progress.save();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.F9:
                console.log("load");
                VisualNovel.ƒS.Progress.load();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    VisualNovel.dataForSave = {
        nameProtagonist: "",
        saraScore: 0,
        scoreForAisaka: "",
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = VisualNovel.ƒS.Menu.create(inGameButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: VisualNovel.ChapterOne, name: "ChapterOne", id: "ChapterOne" },
            { scene: VisualNovel.endSit, name: "endSit", id: "endSit" },
            { scene: VisualNovel.standUp, name: "standUp", id: "standUp" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        VisualNovel.dataForSave = VisualNovel.ƒS.Progress.setData(VisualNovel.dataForSave, uiElement);
        // start the sequence
        VisualNovel.ƒS.Progress.go(scenes);
    }
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function endSit() {
        await VisualNovel.ƒS.Sound.play(VisualNovel.sound.sadEnd, 0.1, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.endSit);
        await VisualNovel.ƒS.update();
    }
    VisualNovel.endSit = endSit;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function standUp() {
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
                S0001: ": … danke … puh du hast mich erschrocken ich dachte schon ich kriege jetzt Ärger. Wie heißt du?",
                S0002: "Kein Problem ich spiele für den Musikclub und habe gerade ein bisschen geübt, bin noch eine ziemliche Anfängerin, aber ich werde jeden Tag besser.",
                S0003: "haha Dankeschön, das ist mein Lieblingsstück du spielst auch Klavier oder wieso kennst du dich so viel aus?",
                S0004: "Wow wieso bist du dann nie dem Musikcl…",
            },
        };
        // await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.endSit);
        await VisualNovel.ƒS.update();
        let direction;
        let directionsPossibilities = {
            right: "Rechts",
            straight: "Geradeaus",
            left: "Links"
        };
        let solution = [directionsPossibilities.straight, directionsPossibilities.right, directionsPossibilities.left, directionsPossibilities.right, directionsPossibilities.straight, directionsPossibilities.straight, directionsPossibilities.right];
        let solutionCounter = 0;
        minigame();
        async function minigame() {
            VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0, 0, true);
            //Hier kommt das Drei Türen/Gänge Hintergrund Bild
            //await ƒS.Location.show(locations.hallway);
            //await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
            changeMusic();
            if (solutionCounter < solution.length) {
                direction = await VisualNovel.ƒS.Menu.getInput(directionsPossibilities, "decisionClass");
                switch (direction) {
                    case directionsPossibilities.right:
                        if (directionsPossibilities.right === solution[solutionCounter]) {
                            solutionCounter++;
                        }
                        else {
                            solutionCounter = 0;
                        }
                        break;
                    case directionsPossibilities.straight:
                        if (directionsPossibilities.straight === solution[solutionCounter]) {
                            solutionCounter++;
                        }
                        else {
                            solutionCounter = 0;
                        }
                        break;
                    case directionsPossibilities.left:
                        if (directionsPossibilities.left === solution[solutionCounter]) {
                            solutionCounter++;
                        }
                        else {
                            solutionCounter = 0;
                        }
                        break;
                }
                return minigame();
            }
            else {
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_links, 0, 0, true);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.show(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.open, VisualNovel.newPositions.bottomright);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0001);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                VisualNovel.dataForSave.nameProtagonist = await VisualNovel.ƒS.Speech.getInput();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002 + " " + VisualNovel.dataForSave.nameProtagonist);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.show(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.smile, VisualNovel.newPositions.bottomright);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0002);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0003);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0004);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0004);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.classroom);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.ambulance, 0.3, 0, true);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.brakes, 0.3, 0, true);
                await VisualNovel.ƒS.update(3);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.ambulance, 0, 0, true);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.brakes, 0, 0, true);
                return "ChapterTwo";
            }
        }
        async function changeMusic() {
            console.log(solution[solutionCounter]);
            if (solution[solutionCounter] === "Links") {
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_links, 0.3, 0, true);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0, 0, true);
            }
            else if (solution[solutionCounter] === "Rechts") {
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0.3, 0, true);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_links, 0, 0, true);
            }
            else {
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_links, 0, 0, true);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0, 0, true);
            }
        }
    }
    VisualNovel.standUp = standUp;
})(VisualNovel || (VisualNovel = {}));
//# sourceMappingURL=MoonlightSonata.js.map