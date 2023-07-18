namespace VisualNovel {
    export async function ChapterFour(): ƒS.SceneReturn {
        console.log("Chapter 3");

        let text = {
            Narrator: {
                N0001: "Es ist endlich Samstag und der Protagonist macht sich auf den Weg zu Sara, voller Freude konnte er die ganze Nacht nicht schlafen.",
                N1001: "Voller Euphorie macht der Protagonist sich auf den Weg zu Sara. Er klingelt an ihrer Haustür und Sarah öffnet sie ihm, herausgeputzt in einem Kleid.",
                N0002: "Als er endlich mit ihr ihm Zimmer sitzt, wo das Klavier drinsteht, beginnen sie auch schon zusammen zu üben. Stunden voller Spaß und Freude vergingen, als Sara unterbricht.",
                N0003: "Sara sollte bald sehr viel Glück erfahren, von dem sie nichts weiß.",
                N0004: "Sara kommt von der Toilette zurück.",
                N0005: "Sie üben weiter. Sara ist erfreut und lächelt beim Üben.",
                N0006: "Sie üben weiter. Sara ist traurig und die Stimmung beim Üben ist mies.",

            },

            Protagonist: {
                P0001: "Habe ich einen Dresscode verpasst, oder warum bist du so schick angezogen? Hätte ich mir auch etwas Bestimmtes anziehen sollen?",
                P0002: "Danke.",
                P0003: "Also passiert es öfter, dass sie im Krankenhaus landet?",
                P0004: "Das wusste ich gar nicht... sie hat sowas nie erwähnt...",
                P0005: "Ich gebe mein Bestes.",
                P0006: "Ach, kein Problem. Ich habe mich so lange mit deiner Mutter unterhalten.",
                P0007: "Ehm... ja. Sie meinte du siehst wunderschön darin aus.",
                P0008: "Wahrscheinlich, weil sie sich Sorgen um dich macht.",
                P0009: "Du warst im Krankenhaus und anscheinend nicht zum ersten Mal, da würde sich jede Mutter sorgen machen.",
                P0010: "Du bist seitdem Kindesalter in Krankenhäuser... das ist doch keine Übertreibung!",
                P0011: "…",
                P0012: "Tut mir leid... wir kennen uns noch nicht so lange, das geht mich eigentlich gar nichts an...",
                P0013: "Puhh … das war ein anstrengender Tag, aber ich glaube wir sind gut vorangekommen oder was sagst du Sara",
                P0014: "Perfekt, das freut mich, aber es ist schon spät ich sollte mich auf den Weg nach Hause machen. Ahja wann ist eigentlich die Generalprobe?",
                P0015: "Ich werde auf jeden Fall da sein, bis Samstag, tschüss.",
            },

            Sara: {
               S0001: "Ehm... nein... das ist das Kleid für das Konzert, das hatte ich eben bloß zur Probe an.",
               S0002: "Ohhh... ehm...  vielen Dank",
               S0003: "Ich muss kurz aufs Klo, gleich wieder da.",
               S0004: "Da bin ich wieder. Sorry, dass du warten musstest.",
               S0005: "Ach echt? Worüber habt ihr euch denn unterhalten?",
               S0006: "Über mein Konzert Kleid?!?! Warum das denn? …",
               S0007: "Was?! MAMAAA!!! Warum sagt sie das zu ausgerechnet zu dir? ",
               S0008: "Was?! Warum erzählt sie dir das? Oh... das werde ich später mit ihr klären....",
               S0009: "Warum Sorgen? Mir geht es gut... ",
               S0010: "Was?! Wie viel hat sie dir erzählt! Jedenfalls ist das alles nicht so dramatisch wie es klingt, sie übertreibt bloß. Mach dir keine Gedanken.",
               S0011: "…",
               S0012: "Lass uns einfach weiterüben... dafür bist du schließlich hier.",
               S0013: "Ja … ich glaube ich bin gut vorbereitet für das Stück.",
               S0014: "Diese Woche Samstag um 11 Uhr ist die Generalprobe im Konzerthaus und den Samstag darauf ist das Konzert. Du kannst mich ja besuchen kommen, wenn du magst.",
               S0015: "Bis Samstag ich freu mich drauf.",                
            },

            Mutter: {
                M0001: "Hier … ich bringe euch etwas zum Trinken. ",
                M0002: "Und ich wollte mich kurz bei dir bedanken für alles, was du für Sara machst.",
                M1002: " Für dich ist es „nur“ eine Freundschaft, aber für sie ist es mehr. Da sie sehr oft im Krankenhaus ist, konnte sie nicht lange Freundschaften halten.",
                M0003: "Sie war schon seit Kindesaltar gebrechlicher als andere Kinder, was zu mehrere Krankenhaus Aufenthalten führte, weswegen sie ihre Freunde verlor, da sie einfach vergessen wurde.",
                M1003: "Aber bitte spreche sie nicht darauf, weil das für sie unangenehm ist.",
                M0004: "Jedenfalls wäre ich dir dankbar, wenn du auch weiterhin mit ihr befreundet sein könntest, damit ich mir weniger Sorgen machen kann.",
                M0005: "Dankeschön! Aber ich geh jetzt besser, weil gleich wird sie zurückkommen.",
            },
        };

        let chance = {
            compliment: "Kompliment machen",
            continue: "Mit dem Üben anfangen"
        };

        let choice = {
            lie: "Über dein Konzert-Kleid",
            truth: "Über deine Krankheit"
        };

        let compliment = {
            first: "Weil ich derselben Meinung bin.",
            second: "Du siehst wunderschön darin aus.",
            third: "Jedenfalls lass uns weiter üben.",
        };

        
        await ƒS.Location.show(locations.stadtInneren);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0001);
        await ƒS.update();
        await ƒS.Location.show(locations.vorDemHausVonSara);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N1001);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0001);
        await ƒS.update();
        await ƒS.Character.show(characters.sara, characters.sara.pose.shoutCasual, newPositions.bottomright);
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0001);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
        let dialogueElement;
        dialogueElement = await ƒS.Menu.getInput(chance, "decisionClass");

        switch(dialogueElement) {
            case chance.compliment:
                dataForSave.saraScore += 20;
                await ƒS.Speech.tell(characters.protagonist, "Du siehst gut darin aus");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.sara, text.Sara.S0002);
                break;
            case chance.continue:
                console.log("continue");
                break;
        };
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
        await ƒS.Character.hide(characters.sara);
        await ƒS.update();
        await ƒS.Location.show(locations.zimmerMitKlavierBeiSara);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0002);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0003);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
        await ƒS.Character.hide(characters.sara);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " nickt und macht eine kleine Pause, während er auf Sara wartet, in der Zeit kommt die Mutter kurz rein.");
        await ƒS.update();
        ƒS.Sound.fade(sound.knocking, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.knocking, 0.0, 0, true);
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("outToRight"));
        await ƒS.update();
        ƒS.Sound.fade(sound.door, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.door, 0.0, 0, true);
        await ƒS.update();            
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0001);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0002);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0002);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M1002);
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " schaut die Mutter verwirrt an.");
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0003);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0003);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M1003);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0004);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0004);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0005);
        await ƒS.Speech.tell(characters.mutter, text.Mutter.M0005);
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
        await ƒS.Character.hide(characters.mutter);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0003);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0004);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, text.Sara.S0004);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0006);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0005);
        dialogueElement = await ƒS.Menu.getInput(choice, "decisionClass");

        switch(dialogueElement) {
            case choice.lie:
                await ƒS.Speech.tell(characters.sara, text.Sara.S0006);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0007);
                await ƒS.Speech.tell(characters.sara, text.Sara.S0007);
                dialogueElement = await ƒS.Menu.getInput(compliment, "decisionClass");

                switch(dialogueElement) {
                    case compliment.first:
                        dataForSave.saraScore += 10;
                        await ƒS.Speech.tell(characters.protagonist, "Weil ich derselben Meinung bin.");
                        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
                        break;
                    case compliment.second:
                        dataForSave.saraScore += 20;
                        await ƒS.Speech.tell(characters.protagonist, "Du siehst wunderschön darin aus.");
                        await ƒS.Speech.tell(characters.narrator, text.Narrator.N0005);
                        break;
                    case compliment.third:
                        await ƒS.Speech.tell(characters.protagonist, "Jedenfalls lass uns weiter üben.");
                        break;    
                };

                break;
            case choice.truth:
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.frownCasual, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.sara, text.Sara.S0008);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0008);
                await ƒS.Speech.tell(characters.sara, text.Sara.S0009);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0009);
                await ƒS.Speech.tell(characters.sara, text.Sara.S0010);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0010);
                await ƒS.Speech.tell(characters.sara, text.Sara.S0011);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0011);
                await ƒS.Speech.tell(characters.sara, text.Sara.S0011);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0012);
                await ƒS.Speech.tell(characters.sara, text.Sara.S0012);
                await ƒS.Speech.tell(characters.narrator, text.Narrator.N0006);
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                await ƒS.update();
                break;
        };
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0013);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0013);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0014);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0014);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.P0015);
        await ƒS.Speech.tell(characters.sara, text.Sara.S0015);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
        await ƒS.Character.hide(characters.sara);
        await ƒS.update();
        return "chapterFive"
        };
    }