"use strict";
var VisualNovel;
(function (VisualNovel) {
    async function chapterFive() {
        console.log("Chapter 5");
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.endChapterOne);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Tag der Probe bricht an, " + VisualNovel.characters.protagonist.name + " macht sich auf den Weg in das Konzerthaus.");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.konzertHalle);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Oh … ich komme gerade rechtzeitig sie fangen gleich an.");
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt2, 0.3, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " hat sich gerade hingesetzt und schon fängt die Probe an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Direkt am Anfang kein Patzer so wie wir es geübt haben sehr gut.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " freut sich wirklich, dass Sara am Anfang keine Fehler gemacht hat, um direkt am Anfang nicht wie schlecht dazustehen.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich glaube sie wird langsamer, fängt jetzt die Nervosität richtig an?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " wurde selbst etwas unruhig, weil man Sara angemerkt hat, dass sie nervös wird.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Da stimmt etwas nicht... warum hört sie auf zu spielen?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "In dem Moment, wo " + VisualNovel.characters.protagonist.name + "das sagt, fällt Sara zu Boden." + VisualNovel.characters.protagonist.name + " eilte sofort nach vorne, um zu sehen, wie es ihr geht. Als er Saras Mutter vorne sah fragte er sie wie es Sara geht.");
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt2, 0.0, 0, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Was ist mit ihr? Das ist ja genau wie damals! Ruft jemand einen Krankenwagen!!!");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, VisualNovel.characters.protagonist.name + ", der wurde bereits gerufen und sollte gleich da sein. Mach dir keine Sorgen, sie wird das Überstehen... bestimmt...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Hoffentlich... darf ich sie ins Krankenhaus mit begleiten?");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Leider dürfen nur Familienmitglieder mitfahren, aber du darfst sie gern besuchen kommen, sobald sie sich ein wenig ausgeruht hat.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich hoffe es geht ihr bald wieder besser... immerhin ist ja auch das Konzert bald.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Sie macht sich deswegen auch schon so viele Sorgen...  und das tut ihr auch nicht gut...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich kann das verstehen... ich selbst habe auch auf Konzerten gespielt und für mich war nichts wichtiger als die bestmögliche Perfomance abzuliefern und dafür habe ich Tag und Nacht bis zu meinen Grenzen geübt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Das ist aber nicht so gesund, vor allem nicht, wenn du sowieso schon kränklich bist wie Sara und es ihr dann noch mehr zu Last fällt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das stimmt wohl....");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Sie geht immer an ihre Grenzen, obwohl sie sich das nicht leisten kann... und das macht alles schlimmer... ich konnte mir das als ihre Mutter nie mitansehen... das tut mir weh...");
        let dialogueElement;
        let decision = {
            mother: "Der Mutter zustimmen",
            sara: "Für Sara sprechen",
        };
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(decision, "decisionClass");
        switch (dialogueElement) {
            case decision.mother:
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das kann ich mir gar nicht vorstellen, wie man als Elternteil ständig solche Sorgen um sein zerbrechliches Kind machen muss... das muss grauenhaft sein...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Nach all den Jahren gewöhnt man sich nie daran... diese Rücksichtslosigkeit von ihr macht es mir nur noch schwerer... ich weiß nicht, wie lange ich das Aushalten kann... ich würde sie am liebsten von allem Anstrengenden fernhalten und die Last abnehmen wollen...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das kann ich verstehen... aber ich werde für Sara da sein und wo ich kann, helfen und ihre Last teilen. ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Ich danke dir... das freut mich zu hören. Sie hat wohl in dir einen sehr guten Freund gefunden, ich denke sie ist bei dir in guten Händen...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich danke Ihnen...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sara, welche voller Schmerzen am Boden liegt, hat das Gespräch gerade noch so mitangehört... jedoch wird ihr schwarz vor Augen und sie verliert ihr Bewusstsein.");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.frownCasual, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Mama....aaaa...");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.frownCasual, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "SARA!");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mutter);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Notarzt stürmt rein und kümmert sich sofort um Sara, welche gerade dabei ist ihr Bewusstsein zu verlieren. Sie packen sie auf die Liege und laufen zum Krankenwagen. Ihre Mutter steigt mit ein und verabschiedet sich.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Viel Glück! Ich bete für sie....");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Krankenwagen fährt weg und der Protagonist macht sich schweren Herzens auf den Weg nachhause. Seine Gedanken lassen ihn nicht in Ruhe und die nächste Zeit verbringt er in unruhiger Sorge um Sara.");
                return "chapterSix";
            case decision.sara:
                VisualNovel.dataForSave.saraScore += 20;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich kann aber Sara verstehen.... ich würde dasselbe wie sie machen... und mich nicht von einer Krankheit das Leben einschränken lassen, genau deswegen würde dann umso mehr mein Leben normal leben wollen.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Das mag ja sein... aber dann hat sie umso größere Schmerzen und verkürzt sogar ihr Leben....");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Aber ist ein kürzeres erfülltes Leben nicht schöner als ein längeres unerfülltes Leben? Also hätte ich die Wahl würde ich mich auch dafür entscheiden...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Aber sie ist ja nicht die Einzige, die leidet... die Menschen um sie herum leiden mit ihr...");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mutter);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Dennoch ist es ihr Leben und ihre Entscheidung...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sara, welche voller Schmerzen am Boden liegt, hat das Gespräch gerade noch so mitangehört... jedoch wird ihr schwarz vor Augen und sie verliert ihr Bewusstsein.");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.frownCasual, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Mama....aaaa...");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.frownCasual, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "SARA!");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mutter);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Notarzt stürmt rein und kümmert sich sofort um Sara, welche gerade dabei ist ihr Bewusstsein zu verlieren. Sie packen sie auf die Liege und laufen zum Krankenwagen. Ihre Mutter steigt mit ein und verabschiedet sich.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Viel Glück! Ich bete für sie....");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Krankenwagen fährt weg und der Protagonist macht sich schweren Herzens auf den Weg nachhause. Seine Gedanken lassen ihn nicht in Ruhe und die nächste Zeit verbringt er in unruhiger Sorge um Sara.");
                return "chapterSix";
        }
        ;
    }
    VisualNovel.chapterFive = chapterFive;
    ;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function ChapterFour() {
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
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.stadtInneren);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorDemHausVonSara);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N1001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.show(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.newPositions.bottomright);
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("rightOut"));
        let dialogueElement;
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(chance, "decisionClass");
        switch (dialogueElement) {
            case chance.compliment:
                VisualNovel.dataForSave.saraScore += 20;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Du siehst gut darin aus");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0002);
                break;
            case chance.continue:
                console.log("continue");
                break;
        }
        ;
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.zimmerMitKlavierBeiSara);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0003);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " nickt und macht eine kleine Pause, während er auf Sara wartet, in der Zeit kommt die Mutter kurz rein.");
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.knocking, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.knocking, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M1002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " schaut die Mutter verwirrt an.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M1003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0005);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0005);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mutter);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0004);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0006);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0005);
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(choice, "decisionClass");
        switch (dialogueElement) {
            case choice.lie:
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0006);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0007);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0007);
                dialogueElement = await VisualNovel.ƒS.Menu.getInput(compliment, "decisionClass");
                switch (dialogueElement) {
                    case compliment.first:
                        VisualNovel.dataForSave.saraScore += 10;
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Weil ich derselben Meinung bin.");
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0005);
                        break;
                    case compliment.second:
                        VisualNovel.dataForSave.saraScore += 20;
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Du siehst wunderschön darin aus.");
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0005);
                        break;
                    case compliment.third:
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Jedenfalls lass uns weiter üben.");
                        break;
                }
                ;
                break;
            case choice.truth:
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0008);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0008);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0009);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0009);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0010);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0010);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0011);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0011);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0011);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0012);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0012);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0006);
                break;
        }
        ;
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0013);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0013);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0014);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0014);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0015);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0015);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
        await VisualNovel.ƒS.update();
        return "chapterFive";
    }
    VisualNovel.ChapterFour = ChapterFour;
    ;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function chapterOne() {
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
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.cicada, 0.1, 2, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.headphones);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell("", "");
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.classroom);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.cicada, 0.0, 2, true);
        await VisualNovel.ƒS.Sound.play(VisualNovel.sound.beethoven_mvt1, 0.3, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
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
                        VisualNovel.dataForSave.saraScore += 20;
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002);
                        await VisualNovel.ƒS.Character.show(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.newPositions.bottomright);
                        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.animate("outToRight"));
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.animate("rightOut"));
                        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
                        await VisualNovel.ƒS.update();
                        return "standUp";
                    case toilletOrDoc.doc:
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
                        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.animate("outToRight"));
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
                        await VisualNovel.ƒS.update();
                        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.animate("rightOut"));
                        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
                        await VisualNovel.ƒS.Speech.hide();
                        await VisualNovel.ƒS.update();
                        return "standUp";
                }
        }
        ;
    }
    VisualNovel.chapterOne = chapterOne;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function chapterSeven() {
        console.log("Chapter 7");
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.konzertHalle);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der große Tag ist gekommen und der Protagonist geht mit schwerem Herzen zum Konzert. ");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Es ist sichtlich ausgebucht und überfüllt. Irgendwo hinten findet er einen Platz und setzt sich. Der Saal wird leise, denn es beginnt und der Vorhang öffnet sich.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Wow... sie ist super Klasse... und wunderschön...");
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt3, 0.1, 2, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Das Konzert läuft bisher ohne Probleme und Sara scheint es gut zu gehen. Man merkt, dass sie lange auf diesen Moment gewartet hat, denn sie spielt als würde ihr die Bühne alleine gehören.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Auch wenn alle perfekt spielen, sticht sie allein extrem heraus, als würden alle um sie herumspielen. ");
        if (VisualNovel.dataForSave.saraScore >= 70) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Das komplette Konzert fühlt sich an, als würde sie eine Geschichte erzählen und der Saal hört ihr zu... die Geschichte ihres Lebens und ihres Schmerzens...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "den sie teilen möchte, aber nie konnte. Es fühlt sich an, als wäre es der Moment, an dem sie alles raus lässt... Als würde ihre Musik mit ihr weinen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Es ist so wunderschön...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sara ist konzentriert, jedoch schaut sie in einem Moment direkt zum Protagonisten, als wüsste sie genau, wo er sitzen würde. Sie lächelt ihn an und ihre Lippen bewegen sich. ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Musik ist zu laut, um es verstehen zu können. Jedoch wusste der Protagonist genau, was sie gesagt hat. ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "DANKE");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich danke dir Sara...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Das Konzert verläuft exzellent... der komplette Saal tobt und jubelt. Es war wie ein Finale... und es fühlt sich an wie ein Happy Ending. Nach dem Konzert geht der Protagonist hinter die Bühne, um Sara zu beglückwünschen.");
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("outToRight"));
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, VisualNovel.characters.protagonist.name + ", du bist hier! ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Natürlich, ich konnte es nicht verpassen...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Danke dir, es bedeutet mir viel!");
            if (VisualNovel.dataForSave.disputeWithSara == true) {
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Hör zu... ich wollte mich für gestern entschuldigen... ich hatte nicht das Recht dir etwas vorzuschreiben... ich hab mir nur Sorgen gemacht.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Mach dir keinen Kopf, mir tut es auch leid... ich hätte nicht so ausflippen sollen... nur hör ich das so oft, dass mich das frustriert hat.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Dann ist alles wieder gut zwischen uns?");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Natürlich... ich lasse doch nicht meinen einzigen Freund davonkommen.");
            }
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Jedenfalls warst du unglaublich! Du hast so gut gespielt! Noch viel viel besser als in den Proben, das war ja so ein atemberaubendes Gefühl deiner Musik zuzuhören!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Ach was, ich war nicht alleine da oben...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Es hat sich aber so angefühlt... du warst der Mittelpunkt und dein Kleid stand dir so gut!");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Danke... ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Jedenfalls wurde schon ein neues Konzert angekündigt, da dieses ja so gut wurde... und ich soll wieder mitmachen! ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das freut mich für dich! Dann hast du ja wieder viel Arbeit vor dir...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Wir haben viel Arbeit vor uns... ich könnte wieder Hilfe beim Üben gebrauchen... natürlich, nur wenn du willst...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Liebend gern.");
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shoutCasual, VisualNovel.animate("rightOut"));
            await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sara und der Protagonist lächeln sich an... Der Protagonist und Sara verbrachten noch viele Nächte zusammen und übten für unzählige Konzerte. Irgendwann überredete Sara den Protagonisten zum Mitspielen und sie spielten zusammen noch schönere Musik. ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Doch wer hätte es gedacht, dass diese eine magische Nacht nicht nur zauberhafte Musik, sondern auch eine zauberhafte Wirkung mit sich bringt.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Immerhin haben sich Saras Anfälle seitdem minimiert und wurden schwächer... sie wirkte gesünder und fing an ihr Leben zu leben. Vielleicht fehlten da nur etwas Freundschaft und gute Musik?");
        }
        if (VisualNovel.dataForSave.saraScore < 100) {
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Die Stimmung wechselt plötzlich... obwohl nichts passiert, spürt man, dass etwas nicht stimmt. Der Protagonist möchte loslaufen, aber weiß nicht wieso oder wohin.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Sara spielt, als wäre es ihr letztes Konzert... ihre letzte Musik. Die Musik ist wundervoll, jedoch erdrückend. Sie spielt so voller Energie und jeder ihrer Tastenschläge klingt wie ein eigenes Lied. ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Irgendwas stimmt hier wieder nicht...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Im Saal erstreckt sich eine wunderschöne, jedoch traurige Stimmung... vielen Leuten kommen die Tränen, weil die Musik eine traurige Geschichte erzählt. Viele verstehen sie nicht, doch der Protagonist weiß genau, dass Sara ihre Geschichte erzählt ... ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "die Geschichte ihres Lebens und ihres Schmerzens... den sie teilen möchte, aber nie konnte. Es fühlt sich an, als wäre es der Moment, an dem sie alles raus lässt... Als würde ihre Musik mit ihr weinen. ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Was passiert hier?");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Das Konzert ist fast vorbei und Sara spielt ohne Halt. Der Saal ist gefüllt voller Emotionen... wunderschöner Emotionen... Und in den letzten Sekunden, genau wann das Lied vorbei sein sollte.... ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "kippt Sara nach ihrem letzten Tastenschlag um. Alle sind schockiert und sofort wird ihr Hilfe geleistet... der Protagonist sitzt schockiert auf seinem Platz und spricht etwas vor sich hin...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Du wusstest, dass es dein letztes Konzert war, nicht wahr?... Du hieltst bis zum Schluss durch, um das Lied zu beenden... Sara.... deswegen hattest du Tränen in den Augen und hast dich bedankt... ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Krankenwagen ist da und versucht Sara noch zu reanimieren.... ihre Mutter steht weinend daneben.... Der Protagonist kann sich nicht bewegen... er schaut aus dem Fenster... es ist Vollmond. Der Protagonisten kommen die Tränen...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Moonlight Sonata... wie eine Blume zwischen zwei Abgründen...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Saal wird plötzlich ruhig und alle halten den Atem an. Einer der Notärzte steht da und spricht: Sie ist tot... wir konnten leider nichts für sie tun...");
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "SARA, MEIN SCHATZ! NEIN, BITTE WACH AUF! WARUM NUR?");
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
            await VisualNovel.ƒS.update();
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Und wie der Titel des Liedes... “Moonlight Sonata”, scheint ein Mondstrahl durch das Fenster auf Sara. Und vielleicht kommt es dem Protagonisten nur so vor... jedoch sieht es so aus, als würden die Mondstrahlen Saras Seele befreien und mit zu sich aufziehen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Du bist nun selbst das Mondlicht, Sara...");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Protagonist schaut dem Mondlicht entgegen... es scheint hell, heller als die Sonne... zumindest fühlt es sich in diesem Moment danach an. Genau in diesem Moment verschwindet das Licht, denn eine Wolke hat sich davorgeschoben.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich danke dir für alles...");
            await VisualNovel.ƒS.Location.show(VisualNovel.locations.endChapterOne);
            await VisualNovel.ƒS.Text.print("<div class='newspaper'><h1>Junge Dame verfällt ihrer Krankheit welche ihren Körper schwächt nachdem sie an einem Konzert in voller Länge gespielt hat</h1></div>");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Abend ging als Tragödie in die Geschichte ein und lange wurde noch darüber geredet. Doch irgendwann wurde geschwiegen und vergessen... außer einer. Der Protagonist erinnerte sich immer an Sara, wenn er den Mond sah... es war als würde er zu ihm sprechen.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Der Protagonist konnte ihn nicht verstehen, aber er wusste, dass Sara ihm eine Nachricht schickte. Eine Nachricht, die ihn wieder zur Musik bringen sollte.");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Und so nahm der Protagonist es als Saras letzten Wunsch und fing an wieder zu spielen... für sie. Es war wunderschöne und zeitgleich traurige Musik... so wie sie Sara gespielt hatte. ");
            await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Moonlight Sonata");
        }
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.credits);
    }
    VisualNovel.chapterSeven = chapterSeven;
    ;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function chapterSix() {
        console.log("Chapter 6");
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.endChapterOne);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Es war abends und Protagonist war auf dem Weg zu Sara ins Krankenhaus dieses Mal will er sie mit seiner Krankheit konfrontieren.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, "Denn nach dem zweiten Vorfall kann er nicht einfach zusehen, wie Sara sich selbst verletzt.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " betritt das Krankenhaus und macht sich auf dem Weg zu ihrem Krankenzimmer.");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.krankenhauszimmer);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "...");
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.knocking, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.knocking, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.frown, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Herein.");
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Hey du... wie fühlst du dich?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Es geht... aber schon etwas besser...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Du hast mir einen Riesenschreck eingejagt... aber zum Glück scheint es dir besser zu gehen...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Ja...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Dann ist das Konzert wohl für dich erledigt?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Auf keinen Fall!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Was?!");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Du glaubst wohl nicht, dass ich wegen einem kleinen Anfall das Handtuch werfe?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Kleiner Anfall? Wir dachten wir verlieren dich da als du dein Bewusstsein verloren hattest.... und es ist vor allem nicht der Erste. Laut deiner Mutter auch nicht der Zweite.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "… meine Mutter hat es dir also erzählt?");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Eher angedeutet...");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Hör zu … es ist meine Sache, deswegen … egal was du sagst... du wirst mich nicht vom Konzert abhalten können.");
        let dialogueElement;
        let decision = {
            minus: "Warum nicht?",
            plus: "Dann unterstütze ich dich",
        };
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(decision, "decisionClass");
        switch (dialogueElement) {
            case decision.minus:
                VisualNovel.dataForSave.saraScore -= 10;
                VisualNovel.dataForSave.disputeWithSara = true;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, ": Alle um dich herum machen sich Sorgen und wollen nicht, dass dir etwas passiert. Warum nimmst du nicht etwas Rücksicht auf die Menschen um dich herum? Du bist Ihnen allen wichtig... ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "und wenn du wieder beim Konzert zusammenbrichst, dann sind die Mühen von Allen umsonst gewesen und das Konzert geht den Bach runter.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Die Mühen von Allen? Was ist mit meinen Mühen?!?! Warum muss ich immer einen Schritt zurück gehen und Rücksicht auf Andere nehmen?! ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Ich hab’s satt wegen meiner Krankheit immer mein Leben nicht leben zu können! ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich verstehe dich ja, aber...");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.frown, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shout, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "DU VERSTEHST MICH KEIN STÜCK! DU WEISST NICHT WIE ES IST DEIN GANZES LEBEN GANZ ALLEINE AN EIN KRANKENHAUS BETT GEFESSELT ZU SEIN UND VON ALLEN BEMITLEIDET ZU WERDEN UND NICHTS ZU ERLEBEN!");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "aber...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "KEIN ABER! WAS IST DAS FÜR EIN LEBEN? WAS BRINGT ES MIR EIN LÄNGERES LEBEN ZU HABEN, WENN ICH ES HIER VERBRINGE? DANN STERBE ICH LIEBER!");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Sara...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Nein, es reicht mir. Ich werde das Konzert antreten, selbst wenn es mein Leben verkürzt. Musik ist das Einzige, was mich am Leben hält... Ich habe sonst nichts... außer meiner Familie.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das tut mir sehr leid... ich weiß ich habe kein Recht etwas zu sagen, ich bin nicht in deiner Lage... aber denk doch mal an deine Mutter...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Glaubst du das tue ich nicht? Ich denke jede Minute an sie... und wie ich mir wünschen würde, dass sie ein normales gesundes Kind hätte... statt mich. ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Es tut mir mehr weh sie so zu sehen als meine eigenen Schmerzen. Aber es tut mir auch weh mein Leben zu verpassen und alleine zu sein...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "…");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Durch das Konzert und die Proben mit den anderen verspüre ich wenigstens ein Hauch Leben in mir... ansonsten füllt sich’s an, als wäre ich bereits tot.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "…");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Bitte geh jetzt... ich möchte gerade allein sein...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Es tut mir leid... ");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shout, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                return "chapterSeven";
            case decision.plus:
                VisualNovel.dataForSave.saraScore += 20;
                VisualNovel.dataForSave.disputeWithSara == false;
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ich habe nicht vor dich vom Konzert abzuhalten.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Warte was? ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Ja... liegt ja nicht in meiner Macht. Hast doch ‘nen eigenen Kopf?");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Ja... aber... ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Was stammelst du so?");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Ich habe deine Antwort absolut nicht erwartet... sonst will jeder, dass ich mich schone oder Rücksicht nehmen soll.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Natürlich will ich das auch, aber ich denke dir ist schon bewusst, was du machst... und egal was welchen Weg du gehst... ich begleite dich.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Danke... das bedeutet mir viel.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Wir sind doch schließlich Freunde und Freunde sind füreinander da.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Ich hatte nie wirklich Freunde... deswegen kenn ich das Gefühl nicht...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Was? Warum nicht... du bist doch klasse!");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Die meisten Menschen fangen an mich zu meiden, sobald sie von meiner Krankheit erfahren... ich war mein ganzes Leben so ziemlich alleine...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das tut mir leid... hättest du mich mal früher in der Schule mit deiner Musik angelockt.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Haha, du Witzbold.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Aber jetzt mal ehrlich, du hättest es mir früher sagen können... dann wäre ich mehr oder weniger vorbereitet gewesen.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Du hättest mich dann genau so verlassen ... wie alle anderen.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das weißt du erst, sobald du’s gemacht hättest... ");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Super toll");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Nein, aber wirklich jetzt... komm jetzt erstmal wieder auf die Beine und dann spiel das Konzert deines Lebens... ich werde dir zuschauen und dabei sein.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Danke... dank dir fühle ich mich schon viel besser...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Das freut mich...");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, " …");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Nun gut... es wird spät, ich mach mich dann mal auf den Weg. Schlaf gut.");
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, "Du auch. ");
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.shout, VisualNovel.animate("rightOut"));
                await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
                await VisualNovel.ƒS.update();
                return "chapterSeven";
        }
        ;
    }
    VisualNovel.chapterSix = chapterSix;
    ;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function chapterThree() {
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
                M0001: "Ah Hallo mein Junge Sara hat mir noch nicht deinen Namen gesagt, komm rein",
                M0002: "Nett dich kennen zu lernen Protagonist, komm herein, Saras Zimmer ist die Treppe hoch und dann rechts.",
            },
        };
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.classroom);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
        let dialogueElement;
        let present = {
            nothing: "Man nimmt nichts mit.",
            flowers: "Man nimmt Blumen mit.",
            keychain: "Man nimmt einen Schlüsselanhänger mit.",
        };
        dialogueElement = await VisualNovel.ƒS.Menu.getInput(present, "decisionClass");
        switch (dialogueElement) {
            case present.nothing:
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.stadtInneren);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorDemHausVonSara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.3, 0, true);
                await VisualNovel.ƒS.update(2);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.0, 0, true);
                await VisualNovel.ƒS.update(1);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
                await VisualNovel.ƒS.update(1);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0001);
                await VisualNovel.ƒS.update();
                break;
            case present.flowers:
                VisualNovel.dataForSave.saraScore += 10;
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.stadtInneren);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.blumenladen);
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " begab sich in einen Blumenladen und kaufte einen Strauß Blumen");
                VisualNovel.ƒS.Inventory.add(VisualNovel.items.flowers);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorDemHausVonSara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.3, 0, true);
                await VisualNovel.ƒS.update(2);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.0, 0, true);
                await VisualNovel.ƒS.update(1);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
                await VisualNovel.ƒS.update(1);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0001);
                break;
            case present.keychain:
                VisualNovel.dataForSave.saraScore += 20;
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0004);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " begab sich in die Spielhalle");
                VisualNovel.ƒS.Inventory.add(VisualNovel.items.keychain);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.spielhalle);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0005);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0006);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0003);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorDemHausVonSara);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.3, 0, true);
                await VisualNovel.ƒS.update(2);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.0, 0, true);
                await VisualNovel.ƒS.update(1);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
                await VisualNovel.ƒS.update(1);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
                await VisualNovel.ƒS.update();
                await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0001);
                break;
        }
        ;
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, "Oh das ist kein Problem, ich heiße" + VisualNovel.characters.protagonist.name + ", und spiele auch gerne Klavier.");
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, "Nett dich kennen zu lernen" + VisualNovel.characters.protagonist.name + ", komm herein, Saras Zimmer ist die Treppe hoch und dann rechts.");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mutter);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0009);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.saraHausTreppe);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " läuft wie beschrieben die Treppe hoch, während er hochläuft, bemerkt er die ein oder andere Schallplatte an der Wand.");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " Protagonist steht vor Saras Tür und klopft dann nach ein bisschen unsicherem warten an.");
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.knocking, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.knocking, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.smile, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0001);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.sarasZimmer);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0010);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0011);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0012);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0013);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0014);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0005);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0006);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0015);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0016);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0007);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0017);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0008);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0018);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0009);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.smile, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
        await VisualNovel.ƒS.update();
        return "chapterFour";
    }
    VisualNovel.chapterThree = chapterThree;
    ;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function chapterTwo() {
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
                M0001: "Ahh bist du der Junge, der mit Sara im Musikzimmer war, vielen Dank für deine Hilfe!",
                M0002: "Ihr geht es heute besser! Wenn du magst, kannst du morgen vorbeischauen",
                M0003: "Du kannst morgen nach der Schule vorbeikommen ich sag ihr bescheid."
            },
            HerrYamamoto: {
                L0001: "Hast du nicht letztens erst für sie Hilfe gerufen? Klar kannst du es ihr vorbeibringen kannst direkt ein Krankheitsbesuch draus machen. Ich schreib dir ihre Adresse auf.",
            }
        };
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.classroom);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + "begibt sich auf den Weg in das Musikzimmer. Was findet man?");
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.musicClub);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, VisualNovel.characters.protagonist.name + " nach einem kurzen Blick in den Musikzimmer findet man die Schülerkarte von Sara auf dem Boden");
        VisualNovel.ƒS.Inventory.add(VisualNovel.items.studendCard);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.talking, 0.3, 0, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.schulgang);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.herrYamamoto, text.HerrYamamoto.L0001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0003);
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.herrYamamoto, VisualNovel.characters.herrYamamoto.pose.happy, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.herrYamamoto);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.talking, 0.0, 0, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0003);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.vorDemHausVonSara);
        await VisualNovel.ƒS.update(1);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0005);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.3, 0, true);
        await VisualNovel.ƒS.update(2);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.doorbell, 0.0, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.3, 0, true);
        await VisualNovel.ƒS.update(1);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.door, 0.0, 0, true);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0004);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0006);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0001);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0007);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0008);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.mutter, text.Mutter.M0003);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0009);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.mutter, VisualNovel.characters.mutter.pose.happy, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.mutter);
        await VisualNovel.ƒS.update();
        return "chapterThree";
    }
    VisualNovel.chapterTwo = chapterTwo;
    ;
})(VisualNovel || (VisualNovel = {}));
var VisualNovel;
(function (VisualNovel) {
    async function endSit() {
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.gameOver);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1, 0, 0, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.sadEnd, 0.3, 0, true);
        await VisualNovel.ƒS.update(3.9);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.sadEnd, 0.0, 0, true);
        return "chapterOne";
    }
    VisualNovel.endSit = endSit;
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
            duration: 1,
            alpha: "Assets/Transitions/blink2.png",
            edge: 1
        },
        circle: {
            duration: 3,
            alpha: "./Assets/Transitions/circle.jpg",
            edge: 1
        },
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
        brakes: "Assets/Audio/brake-6315.mp3",
        ambulance: "Assets/Audio/distant-ambulance-siren-6108.mp3",
        talking: "Assets/Audio/crowd-talking-138493.mp3",
        doorbell: "Assets/Audio/doorbell2-6450.mp3",
        door: "Assets/Audio/dorm-door-opening-6038.mp3",
        knocking: "Assets/Audio/person-knocking-18474.mp3"
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
        dreiTueren: {
            name: "dreiTueren",
            background: "Assets/Locations/dreiTueren.jpg"
        },
        endChapterOne: {
            name: "endChapterOne",
            background: "Assets/Locations/endChapterOne.png"
        },
        blumenladen: {
            name: "blumenladen",
            background: "Assets/Locations/blumenladen.png"
        },
        saraHausTreppe: {
            name: "saraHausTreppe",
            background: "Assets/Locations/saraHausTreppe.png"
        },
        sarasZimmer: {
            name: "sarasZimmer",
            background: "Assets/Locations/sarasZimmer.png"
        },
        schulgang: {
            name: "schulgang",
            background: "Assets/Locations/schulgang.png"
        },
        spielhalle: {
            name: "spielhalle",
            background: "Assets/Locations/spielhalle.png"
        },
        stadtInneren: {
            name: "stadtInneren",
            background: "Assets/Locations/stadtInneren.png"
        },
        vorDemHausVonSara: {
            name: "vorDemHausVonSara",
            background: "Assets/Locations/vorDemHausVonSara.jpg"
        },
        zimmerMitKlavierBeiSara: {
            name: "zimmerMitKlavierBeiSara",
            background: "Assets/Locations/zimmerMitKlavierBeiSara.png"
        },
        konzertHalle: {
            name: "konzertHalle",
            background: "Assets/Locations/konzertHalle.png"
        },
        krankenhauszimmer: {
            name: "krankenhauszimmer",
            background: "Assets/Locations/krankenhauszimmer.png"
        },
        credits: {
            name: "credits",
            background: "Assets/Locations/credits.png"
        },
        headphones: {
            name: "headphones",
            background: "Assets/Locations/headphones.png"
        },
        gameOver: {
            name: "gameOver",
            background: "Assets/Locations/gameOver.png"
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
                blush: "Assets/Characters/Miki_Casual_PoseD_Open_Blush.png",
                smileCasual: "Assets/Characters/Miki_Casual_PoseD_Smile.png",
                frownCasual: "Assets/Characters/Miki_Casual_PoseD_Frown.png",
                shoutCasual: "Assets/Characters/Miki_Casual_PoseD_Shout.png",
            }
        },
        mutter: {
            name: "Mutter",
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
    VisualNovel.animations = {
        rightOut: "rightOut",
        outToRight: "outToRight",
    };
    function animate(_animation) {
        switch (_animation) {
            case VisualNovel.animations.rightOut:
                return {
                    start: { translation: VisualNovel.newPositions.bottomright },
                    end: { translation: VisualNovel.newPositions.rightout },
                    duration: 1.5,
                    playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case VisualNovel.animations.outToRight:
                return {
                    start: { translation: VisualNovel.newPositions.rightout },
                    end: { translation: VisualNovel.newPositions.bottomright },
                    duration: 1.5,
                    playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            default:
                return {
                    start: { translation: VisualNovel.ƒS.positions.bottomcenter },
                    end: { translation: VisualNovel.ƒS.positions.bottomcenter },
                    duration: 1.5,
                    playmode: VisualNovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
        }
    }
    VisualNovel.animate = animate;
    VisualNovel.items = {
        keychain: {
            name: "Schlüsselanhänger",
            description: "Ein Schlüsselanhänger mit einem kleinen Klavier dran",
            image: "Assets/Items/keychain.png",
            static: true
        },
        flowers: {
            name: "Blumenstrauss",
            description: "Flowers for Sara",
            image: "Assets/Items/flower.png",
            static: true
        },
        studendCard: {
            name: "Schülerkarte",
            description: "Saras Schülerkarte die sie verloren hat",
            image: "Assets/Items/studentcard.png",
            static: true
        },
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
            case VisualNovel.ƒ.KEYBOARD_CODE.I:
                console.log("open inventory");
                await VisualNovel.ƒS.Inventory.open();
                break;
            case VisualNovel.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                await VisualNovel.ƒS.Inventory.open();
                VisualNovel.ƒS.Inventory.close();
                break;
        }
    }
    VisualNovel.dataForSave = {
        nameProtagonist: "",
        saraScore: 0,
        scoreForSara: "",
        disputeWithSara: false,
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = VisualNovel.ƒS.Menu.create(inGameButtons, buttonFunctionalities, "gameMenu");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: VisualNovel.chapterOne, name: "chapterOne", id: "chapterOne" },
            { scene: VisualNovel.endSit, name: "endSit", id: "endSit" },
            { scene: VisualNovel.standUp, name: "standUp", id: "standUp" },
            { scene: VisualNovel.chapterTwo, name: "chapterTwo", id: "chapterTwo" },
            { scene: VisualNovel.chapterThree, name: "chapterThree", id: "chapterThree" },
            { scene: VisualNovel.ChapterFour, name: "chapterFour", id: "chapterFour" },
            { scene: VisualNovel.chapterFive, name: "chapterFive", id: "chapterFive" },
            { scene: VisualNovel.chapterSix, name: "chapterSix", id: "chapterSix" },
            { scene: VisualNovel.chapterSeven, name: "chapterSeven", id: "chapterSeven" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        VisualNovel.dataForSave = VisualNovel.ƒS.Progress.setData(VisualNovel.dataForSave, uiElement);
        // start the sequence
        VisualNovel.ƒS.Progress.go(scenes);
    }
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
                S0001: ": … danke … puh du hast mich erschrocken ich dachte schon ich kriege jetzt Ärger. Wie heißt du eigentlich?",
                S0002: "Kein Problem ich spiele für den Musikclub und habe gerade ein bisschen geübt, bin noch eine ziemliche Anfängerin, aber ich werde jeden Tag besser.",
                S0003: "haha Dankeschön, das ist mein Lieblingsstück du spielst auch Klavier oder wieso kennst du dich so viel aus?",
                S0004: "Wow wieso bist du dann nie dem Musikcl…",
            },
        };
        // await ƒS.Sound.play(sound.beethoven_mvt1, 0.3, true);
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.dreiTueren);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        let direction;
        let directionsPossibilities = {
            right: "Rechts",
            straight: "Geradeaus",
            left: "Links"
        };
        let solution = [directionsPossibilities.straight, directionsPossibilities.right, directionsPossibilities.left, directionsPossibilities.right, directionsPossibilities.straight, directionsPossibilities.straight, directionsPossibilities.right];
        let solutionCounter = 0;
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0, 0, true);
        //await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        while (solutionCounter < solution.length) {
            direction = await VisualNovel.ƒS.Menu.getInput(directionsPossibilities, "decisionClass");
            switch (direction) {
                case directionsPossibilities.right:
                    if (directionsPossibilities.right === solution[solutionCounter]) {
                        solutionCounter++;
                        changeMusic("Rechts");
                    }
                    else {
                        solutionCounter = 0;
                    }
                    break;
                case directionsPossibilities.straight:
                    if (directionsPossibilities.straight === solution[solutionCounter]) {
                        solutionCounter++;
                        changeMusic("Geradeaus");
                    }
                    else {
                        solutionCounter = 0;
                    }
                    break;
                case directionsPossibilities.left:
                    if (directionsPossibilities.left === solution[solutionCounter]) {
                        solutionCounter++;
                        changeMusic("Links");
                    }
                    else {
                        solutionCounter = 0;
                    }
                    break;
            }
        }
        await VisualNovel.ƒS.Location.show(VisualNovel.locations.musicClub);
        await VisualNovel.ƒS.update(VisualNovel.transition.blink.duration, VisualNovel.transition.blink.alpha, VisualNovel.transition.blink.edge);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_links, 0, 0, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0, 0, true);
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1, 0, 0, true);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.narrator, text.Narrator.N0002);
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.open, VisualNovel.animate("outToRight"));
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.sara, text.Sara.S0001);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.smile, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
        await VisualNovel.ƒS.update();
        let name = await VisualNovel.ƒS.Speech.getInput();
        VisualNovel.dataForSave.nameProtagonist = name;
        VisualNovel.characters.protagonist.name = name;
        await VisualNovel.ƒS.Speech.tell(VisualNovel.characters.protagonist, text.Protagonist.P0002 + " " + VisualNovel.dataForSave.nameProtagonist);
        await VisualNovel.ƒS.update();
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.smile, VisualNovel.animate("outToRight"));
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
        await VisualNovel.ƒS.Character.animate(VisualNovel.characters.sara, VisualNovel.characters.sara.pose.open, VisualNovel.animate("rightOut"));
        await VisualNovel.ƒS.Character.hide(VisualNovel.characters.sara);
        await VisualNovel.ƒS.update();
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.ambulance, 0.3, 0, true);
        await VisualNovel.ƒS.Speech.tell("", "");
        VisualNovel.ƒS.Sound.fade(VisualNovel.sound.ambulance, 0, 0, true);
        return "chapterTwo";
        async function changeMusic(_direction) {
            console.log("Changed Music - " + _direction);
            if (_direction == "Links") {
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_links, 0.3, 0, true);
                VisualNovel.ƒS.Sound.fade(VisualNovel.sound.beethoven_mvt1_rechts, 0, 0, true);
            }
            else if (_direction === "Rechts") {
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