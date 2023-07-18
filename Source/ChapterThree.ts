namespace VisualNovel {
    export async function chapterThree(): ƒS.SceneReturn {
        console.log("Chapter 3");

        let text = {
            Narrator: {
                N0001: "Direkt nach der Schule macht sich der Protagonist auf den Weg zu Sara. Auf dem Weg zum Bahnhof überlegt er noch ob er eine Kleinigkeit mitnehmen soll.",
                N0002: "Also ging der Protagonist los in die Spielhalle, um etwas interessantes Kleines zu gewinnen. ",
                N0003: "Der Protagonist fischte den Schlüsselanhänger erfolgreich aus dem Automaten. Und machte sich mit hoher Freude auf den Weg zu Sara.",
                N0004: "Nach 20min war er dann auch vor ihrer Tür atmet nochmal tief ein und klingelt dann an ihrer Haustür.",
                N0005: "Der Protagonist läuft wie beschrieben die Treppe hoch, während er hochläuft, bemerkt er die ein oder andere Schallplatte an der Wand.",
                N0006: "Der Protagonist steht vor Saras Tür und klopft dann nach ein bisschen unsicherem warten an."
            },

            Protagonist: {
                P0001: "Ob sie sich über ein kleines Geschenk freuen würde? Wir kennen uns noch nicht so lange vielleicht sollte ich es einfach lassen.",
                P0002: "Ich schätze wohl ich nehme nichts mit ich glaube es ist noch zu früh ihr etwas zu schenken.",
                P0003: "hmmm… Blumen bringt man sonst immer bei einem Krankheitsbesuch mit ist nicht zu viel und passend dann nehme ich wohl die.",
                P0004: "Ich könnte dahinten auch in eine Spielhalle gehen und etwas Kleines gewinnen die Dinger sind sowieso easy.",
                P0005: "Ohh ein Schlüsselanhänger mit einem kleinen Klavier dran, ob Sara das Gefallen wird, immerhin spielt sie Klavier.",
                P0006: "Vor allem kann ich es dann vor den Eltern verstecken damit es für sie und mich nicht zu peinlich wird.",
                P0009: "Alles klar danke schön!",
                P0010: "Hallo Sara, ich dachte ich komm dich mal besuchen da ich auch deine Schülerkarte zu bringen musste da ich sie im Musikraum gefunden habe.",
                P0011: "Nach dem du umgekippt bist habe ich mich erstmal erschrocken, geht es dir jetzt nach den zwei Tagen besser?",
                P0012: "Aber dein Klavierspiel an dem Tage war wundervoll hab mich sogar extra aus dem Klassenzimmer rausgemogelt.",
                P0013: "Ich spiele selbst Klavier aber so ein normaler Song so schön klingen zulassen ist dann doch zu schwer.",
                P0014: "Es gibt so viele Sprachen auf dieser Welt aber Musik verstehen wir am Ende dann doch immer egal aus welchem Land es auch kommen mag.",
                P0015: "Das würde mich freuen mit dir zu Proben vielleicht kann ich, während den Proben noch für mich paar Sachen lernen. Das ist mir etwas peinlich, aber ich habe dir etwas mitgebracht",
                P0016: "Deine Schülerkarte habe ich hier auch dabei die hast du im Musikzimmer verloren.",
                P0017: "Ahja Wo wollen wir dann zusammen proben?",
                P0018: "Alles klar dann komm ich am Samstag wieder vorbei. Bis Samstag tschüss und gute Besserung.",
            },
            
            Sara: {
                S0001: "Ja bitte?",
                S0002: "Ohh Dankeschön das ist aber sehr nett von dir.",
                S0003: "Joa mir geht’s den Umständen entsprechend. Die zwei Tage haben gut getan ich hoffe ich kann bald wieder in die Schule.",
                S0004: "Der Song ist echt leicht, aber ich spiele ihn schon seit meiner Kindheit so gerne, es klingt so, als würde der Himmel voller Sternschnuppen sein und jede einzelne würde ihre eigene Geschichte erzählen.",
                S0005: "Ich spiele demnächst bei einem Konzert mit und habe meine Proben verpasst aufgrund meines Unfalls,",
                S0006: "mir ist das Konzert sehr wichtig da du auch Klavier spielen kannst wollen wir zu zweit üben damit das Konzert von meiner Seite nicht ein kompletter Reinfall wird.",
                S0007: "Oh vielen Dank.",
                S0008: "Wir können bei uns Proben da wir hier ein Klavier haben. Wir können am Samstag anfangen. ",
                S0009: "Dankeschön bis Samstag."
            },

            Mutter: {
                M0001:"Ah Hallo mein Junge Sara hat mir noch nicht deinen Namen gesagt, komm rein",
                M0002: "Nett dich kennen zu lernen Protagonist, komm herein, Saras Zimmer ist die Treppe hoch und dann rechts.",
            },

        };

        await ƒS.Location.show(locations.classroom);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
      
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0001);
        let dialogueElement;

        let present = {
            nothing: "Man nimmt nichts mit.",
            flowers: "Man nimmt Blumen mit.",
            keychain: "Man nimmt einen Schlüsselanhänger mit.",
        };

        dialogueElement = await ƒS.Menu.getInput(present, "decisionClass");

        switch(dialogueElement) {
            case present.nothing:
                await ƒS.update();
                await ƒS.Location.show(locations.stadtInneren);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0002);
                await ƒS.update();
                await ƒS.Location.show(locations.vorDemHausVonSara);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
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
                await ƒS.Speech.tell(characters.mutter, text.Mutter.M0001);
                await ƒS.update();
                break;
            case present.flowers:
                dataForSave.saraScore += 10;
                await ƒS.update();
                await ƒS.Location.show(locations.stadtInneren);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0003);
                await ƒS.update();
                await ƒS.Location.show(locations.blumenladen);
                await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " begab sich in einen Blumenladen und kaufte einen Strauß Blumen");
                ƒS.Inventory.add(items.flowers);
                await ƒS.update();
                await ƒS.Location.show(locations.vorDemHausVonSara);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
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
                await ƒS.Speech.tell(characters.mutter, text.Mutter.M0001);
                break;
            case present.keychain:
                dataForSave.saraScore += 20;
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0004);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " begab sich in die Spielhalle");
                ƒS.Inventory.add(items.keychain);
                await ƒS.update();
                await ƒS.Location.show(locations.spielhalle);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0005);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0006);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
                await ƒS.update();
                await ƒS.Location.show(locations.vorDemHausVonSara);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
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
                await ƒS.Speech.tell(characters.mutter, text.Mutter.M0001);
                break;
        };

        await ƒS.Speech.tell(characters.protagonist, "Oh das ist kein Problem, ich heiße" + characters.protagonist.name + ", und spiele auch gerne Klavier.");
        await ƒS.Speech.tell(characters.mutter, "Nett dich kennen zu lernen" + characters.protagonist.name + ", komm herein, Saras Zimmer ist die Treppe hoch und dann rechts.");
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
        await ƒS.Character.hide(characters.mutter);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0009);
        await ƒS.update();
        await ƒS.Location.show(locations.saraHausTreppe);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " läuft wie beschrieben die Treppe hoch, während er hochläuft, bemerkt er die ein oder andere Schallplatte an der Wand.");
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " Protagonist steht vor Saras Tür und klopft dann nach ein bisschen unsicherem warten an.");
        await ƒS.update();
        ƒS.Sound.fade(sound.knocking, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.knocking, 0.0, 0, true);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.smile, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0001);
        await ƒS.update();
        ƒS.Sound.fade(sound.door, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.door, 0.0, 0, true);
        await ƒS.update();
        await ƒS.Location.show(locations.sarasZimmer);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0010);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0002);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0011);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0003);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0012);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0013);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0004);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0014);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0005);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0006);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0015);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0016);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0007);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0017);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0008);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0018);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0009);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.smile, animate("rightOut"));
        await ƒS.Character.hide(characters.sara);
        await ƒS.update();
        return "chapterFour"
        };
    }