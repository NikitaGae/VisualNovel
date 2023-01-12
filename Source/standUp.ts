namespace VisualNovel {
    export async function standUp(): ƒS.SceneReturn {

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
            Sara: {
                S0001: ": … danke … puh du hast mich erschrocken ich dachte schon ich kriege jetzt Ärger.",
                S0002: "Kein Problem ich spiele für den Musikclub und habe gerade ein bisschen geübt, bin noch eine ziemliche Anfängerin, aber ich werde jeden Tag besser.",
                S0003: "haha Dankeschön, das ist mein Lieblingsstück du spielst auch Klavier oder wieso kennst du dich so viel aus?",
                S0004: "Wow wieso bist du dann nie dem Musikcl…",
            },
        };
        
        await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);
        await ƒS.Location.show(locations.endSit);
        await ƒS.update();

        let rightLeft = {
            right: "Rechts",
            left: "Links"  
          };

        let dialogueElement;

          dialogueElement = await ƒS.Menu.getInput(rightLeft, "decisionClass");

        for(let i = 1; i < 3; i++){
            let reihenfolge = [rightLeft.right, rightLeft.left, rightLeft.right]
            if(i < 0){
                switch(dialogueElement) {
                    case rightLeft.right:
                        await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);
                        zähler++;
                        
                        return "endSit"
                    case rightLeft.left:
                        await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);

                        return "";
                }
            }
        }
    }
}