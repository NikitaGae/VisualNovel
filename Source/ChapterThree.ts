namespace VisualNovel {
    export async function ChapterThree(): ƒS.SceneReturn {
        console.log("Chapter 3");


/* "Direkt nach der Schule macht sich der Protagonist auf den Weg zu Sara. Auf dem Weg zum Bahnhof überlegt er noch ob er eine Kleinigkeit mitnehmen soll.
Protagonist: Ob sie sich über ein kleines Geschenk freuen würde? Wir kennen uns noch nicht so lange vielleicht sollte ich es einfach lassen.
ENTSCHEIDUNG
Nichts mitbringen
Protagonist: Ich schätze wohl ich nehme nichts mit ich glaube es ist noch zu früh ihr etwas zu schenken.
Blumen
Protagonist: hmmm… Blumen bringt man sonst immer bei einem Krankheitsbesuch mit ist nicht zu viel und passend dann nehme ich wohl die.
Gewonnener Klavierschlüsselanhänger
Protagonist: Ich könnte dahinten auch in eine Spielhalle gehen und etwas Kleines gewinnen die Dinger sind sowieso super easy.
Also ging der Protagonist los in die Spielhalle, um etwas interessantes Kleines zu gewinnen. 
Protagonist: Ohh ein Schlüsselanhänger mit einem kleinen Klavier dran, ob Sara das Gefallen wird, immerhin spielt sie Klavier. Vor allem kann ich es dann vor den Eltern verstecken damit es für sie und mich nicht zu peinlich wird.
VIELLEICHT MINISPIEL SON KRAN DING FALLS MAN VERLIERT DANN LÄUFT ER OHNE GESCHENK ZU DER

Der Protagonist fischte den Schlüsselanhänger erfolgreich aus dem Automaten. Und machte sich mit hoher Freude auf den Weg zu Sara. Nach 20min war er dann auch vor ihrer Tür atmet nochmal tief ein und klingelt dann an ihrer Haustür.

Mutter: Ah Hallo mein Junge Sara hat mir noch nicht deinen Namen gesagt, komm rein
Protagonist: Oh das ist kein Problem, ich heiße Protagonist, und spiele auch gerne Klavier.
Mutter: Nett dich kennen zu lernen Protagonist, komm herein, Saras Zimmer ist die Treppe hoch und dann rechts.
Protagonist: Alles klar danke schön!
Der Protagonist läuft wie beschrieben die Treppe hoch, während er hochläuft, bemerkt er die ein oder andere Schallplatte an der Wand. Der Protagonist steht vor Saras Tür und klopft dann nach ein bisschen unsicherem warten an.
Sara: Ja bitte?
Protagonist: Guten Abend Sara, ich dachte ich komm dich mal besuchen da ich auch deine Schülerkarte zu bringen musste da ich sie im Musikraum gefunden habe. Vorhin ist mir dann auch aufgefallen das ich nie meinen Namen gesagt habe ich heiße Protagonist. 
Sara: Schön dich kennen zu lernen Protagonist.
Protagonist: Nach dem du umgekippt bist habe ich mich erstmal erschrocken, geht es dir jetzt nach den zwei Tagen besser?
Sara:  Joa mir geht’s den Umständen entsprechend. (Fake lächeln) Die zwei Tage haben gut getan ich hoffe ich kann bald wieder in die Schule.
Protagonist: Aber dein Klavierspiel an dem Tage war wundervoll hab mich sogar extra aus dem Klassenzimmer rausgemogelt. (Lachendes Gesicht) Ich spiele selbst Klavier aber so ein normaler Song so schön klingen zulassen ist dann doch zu schwer.
Sara: Der Song ist echt leicht, aber ich spiele ihn schon seit meiner Kindheit so gerne, es klingt so, als würde der Himmel voller Sternschnuppen sein und jede einzelne würde ihre eigene Geschichte erzählen.
Protagonist: Es gibt so viele Sprachen auf dieser Welt aber Musik verstehen wir am Ende dann doch immer egal aus welchem Land es auch kommen mag.
Sara: Ich spiele demnächst bei einem Konzert mit und habe meine Proben verpasst aufgrund meines Unfalls, mir ist das Konzert sehr wichtig da du auch Klavier spielen kannst wollen wir zu zweit üben damit das Konzert von meiner Seite nicht ein kompletter Reinfall wird.
Protagonist: Das würde mich freuen mit dir zu Proben vielleicht kann ich, während den Proben noch für mich paar Sachen lernen. Das ist mir etwas peinlich, aber ich habe dir etwas mitgebracht (HIER DAS MACHEN FÜR WAS MAN SICH VORHER ENTSCHIEDEN HAT). Deine Schülerkarte habe ich hier auch dabei die hast du im Musikzimmer verloren. 
Sara: Oh vielen Dank ich stell mir das auf mein Klavier.
Protagonist: Ahja Wo wollen wir dann zusammen proben?
Sara: Wir können bei uns Proben da wir hier ein Klavier haben. Wir können am Samstag anfangen. 
Protagonist: Alles klar dann komm ich am Samstag wieder vorbei. Bis Samstag tschüss und gute Besserung.
Sara: Dankeschön bis Samstag." */


        let text = {
            Narrator: {
                N0001: "Direkt nach der Schule macht sich der Protagonist auf den Weg zu Sara. Auf dem Weg zum Bahnhof überlegt er noch ob er eine Kleinigkeit mitnehmen soll.",
                N0002: "Also ging der Protagonist los in die Spielhalle, um etwas interessantes Kleines zu gewinnen. ",
                N0003: "Der Protagonist fischte den Schlüsselanhänger erfolgreich aus dem Automaten. Und machte sich mit hoher Freude auf den Weg zu Sara.",
                N0004: "Nach 20min war er dann auch vor ihrer Tür atmet nochmal tief ein und klingelt dann an ihrer Haustür.",

            },

            Protagonist: {
                P0001: "Ob sie sich über ein kleines Geschenk freuen würde? Wir kennen uns noch nicht so lange vielleicht sollte ich es einfach lassen.",
                P0002: "Ich schätze wohl ich nehme nichts mit ich glaube es ist noch zu früh ihr etwas zu schenken.",
                P0003: "hmmm… Blumen bringt man sonst immer bei einem Krankheitsbesuch mit ist nicht zu viel und passend dann nehme ich wohl die.",
                P0004: "Hmmm … ich sollte glaube ich erst mal mit dem Zug eine Station fahren dann kann ich laufen.",
                P0005: "Ich könnte dahinten auch in eine Spielhalle gehen und etwas Kleines gewinnen die Dinger sind sowieso super easy.",
                P0006: "Ohh ein Schlüsselanhänger mit einem kleinen Klavier dran, ob Sara das Gefallen wird, immerhin spielt sie Klavier.",
                P0007: "Vor allem kann ich es dann vor den Eltern verstecken damit es für sie und mich nicht zu peinlich wird.",
                P0008: "Oh das ist kein Problem, ich heiße Protagonist, und spiele auch gerne Klavier.",
                P0009: "Alles klar danke schön!"

            },

            Mutter: {
                M0001:"Ah Hallo mein Junge Sara hat mir noch nicht deinen Namen gesagt, komm rein",
                M0002: "Nett dich kennen zu lernen Protagonist, komm herein, Saras Zimmer ist die Treppe hoch und dann rechts.",
            },

            HerrYamamoto: {
                L0001: "Hast du nicht letztens erst für sie Hilfe gerufen? Klar kannst du es ihr vorbeibringen kannst direkt ein Krankheitsbesuch draus machen. Ich schreib dir ihre Adresse auf.",
            }
        };

        await ƒS.update();
        await ƒS.Location.show(locations.classroom);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0001);
        await ƒS.update();

            
        };
    }