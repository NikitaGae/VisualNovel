namespace VisualNovel {
    export async function chapterFive(): ƒS.SceneReturn {
        console.log("Chapter 5");
        await ƒS.Location.show(locations.endChapterOne);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        await ƒS.Speech.tell(characters.narrator, "Der Tag der Probe bricht an, " + characters.protagonist.name + " macht sich auf den Weg in das Konzerthaus.");
        await ƒS.update();
        await ƒS.Location.show(locations.konzertHalle);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Oh … ich komme gerade rechtzeitig sie fangen gleich an.");
        await ƒS.update();
        ƒS.Sound.fade(sound.beethoven_mvt2, 0.3, 0, true);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " hat sich gerade hingesetzt und schon fängt die Probe an.");
        await ƒS.Speech.tell(characters.protagonist, "Direkt am Anfang kein Patzer so wie wir es geübt haben sehr gut.");
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " freut sich wirklich, dass Sara am Anfang keine Fehler gemacht hat, um direkt am Anfang nicht wie schlecht dazustehen.");
        await ƒS.Speech.tell(characters.protagonist, "Ich glaube sie wird langsamer, fängt jetzt die Nervosität richtig an?");
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " wurde selbst etwas unruhig, weil man Sara angemerkt hat, dass sie nervös wird.");
        await ƒS.Speech.tell(characters.protagonist, "Da stimmt etwas nicht... warum hört sie auf zu spielen?");
        await ƒS.Speech.tell(characters.narrator, "In dem Moment, wo " + characters.protagonist.name + "das sagt, fällt Sara zu Boden." + characters.protagonist.name + " eilte sofort nach vorne, um zu sehen, wie es ihr geht. Als er Saras Mutter vorne sah fragte er sie wie es Sara geht.");
        ƒS.Sound.fade(sound.beethoven_mvt2, 0.0, 0, true);
        await ƒS.Speech.tell(characters.protagonist, "Was ist mit ihr? Das ist ja genau wie damals! Ruft jemand einen Krankenwagen!!!");
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.mutter, characters.protagonist.name + ", der wurde bereits gerufen und sollte gleich da sein. Mach dir keine Sorgen, sie wird das Überstehen... bestimmt...");
        await ƒS.Speech.tell(characters.protagonist, "Hoffentlich... darf ich sie ins Krankenhaus mit begleiten?");
        await ƒS.update();
        await ƒS.Speech.tell(characters.mutter, "Leider dürfen nur Familienmitglieder mitfahren, aber du darfst sie gern besuchen kommen, sobald sie sich ein wenig ausgeruht hat.");
        await ƒS.Speech.tell(characters.protagonist, "Ich hoffe es geht ihr bald wieder besser... immerhin ist ja auch das Konzert bald.");
        await ƒS.Speech.tell(characters.mutter, "Sie macht sich deswegen auch schon so viele Sorgen...  und das tut ihr auch nicht gut...");
        await ƒS.Speech.tell(characters.protagonist, "Ich kann das verstehen... ich selbst habe auch auf Konzerten gespielt und für mich war nichts wichtiger als die bestmögliche Perfomance abzuliefern und dafür habe ich Tag und Nacht bis zu meinen Grenzen geübt.");
        await ƒS.Speech.tell(characters.mutter, "Das ist aber nicht so gesund, vor allem nicht, wenn du sowieso schon kränklich bist wie Sara und es ihr dann noch mehr zu Last fällt.");
        await ƒS.Speech.tell(characters.protagonist, "Das stimmt wohl....");
        await ƒS.Speech.tell(characters.mutter, "Sie geht immer an ihre Grenzen, obwohl sie sich das nicht leisten kann... und das macht alles schlimmer... ich konnte mir das als ihre Mutter nie mitansehen... das tut mir weh...");
        
        let dialogueElement;

        let decision = {
            mother: "Der Mutter zustimmen",
            sara: "Für Sara sprechen",
        };

        dialogueElement = await ƒS.Menu.getInput(decision, "decisionClass");

        switch(dialogueElement) {
            case decision.mother:
                await ƒS.Speech.tell(characters.protagonist, "Das kann ich mir gar nicht vorstellen, wie man als Elternteil ständig solche Sorgen um sein zerbrechliches Kind machen muss... das muss grauenhaft sein...");
                await ƒS.Speech.tell(characters.mutter, "Nach all den Jahren gewöhnt man sich nie daran... diese Rücksichtslosigkeit von ihr macht es mir nur noch schwerer... ich weiß nicht, wie lange ich das Aushalten kann... ich würde sie am liebsten von allem Anstrengenden fernhalten und die Last abnehmen wollen...");
                await ƒS.Speech.tell(characters.protagonist, "Das kann ich verstehen... aber ich werde für Sara da sein und wo ich kann, helfen und ihre Last teilen. ");
                await ƒS.Speech.tell(characters.mutter, "Ich danke dir... das freut mich zu hören. Sie hat wohl in dir einen sehr guten Freund gefunden, ich denke sie ist bei dir in guten Händen...");
                await ƒS.Speech.tell(characters.protagonist, "Ich danke Ihnen...");
                await ƒS.Speech.tell(characters.narrator, "Sara, welche voller Schmerzen am Boden liegt, hat das Gespräch gerade noch so mitangehört... jedoch wird ihr schwarz vor Augen und sie verliert ihr Bewusstsein.");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.frownCasual, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.sara, "Mama....aaaa...");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.frownCasual, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                await ƒS.update();
                await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.mutter, "SARA!");
                await ƒS.update();
                await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
                await ƒS.Character.hide(characters.mutter);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, "Der Notarzt stürmt rein und kümmert sich sofort um Sara, welche gerade dabei ist ihr Bewusstsein zu verlieren. Sie packen sie auf die Liege und laufen zum Krankenwagen. Ihre Mutter steigt mit ein und verabschiedet sich.");
                await ƒS.Speech.tell(characters.protagonist, "Viel Glück! Ich bete für sie....");
                await ƒS.Speech.tell(characters.narrator, "Der Krankenwagen fährt weg und der Protagonist macht sich schweren Herzens auf den Weg nachhause. Seine Gedanken lassen ihn nicht in Ruhe und die nächste Zeit verbringt er in unruhiger Sorge um Sara.");
                return "chapterSix"
            case decision. sara:
                dataForSave.saraScore += 20;
                await ƒS.Speech.tell(characters.protagonist, "Ich kann aber Sara verstehen.... ich würde dasselbe wie sie machen... und mich nicht von einer Krankheit das Leben einschränken lassen, genau deswegen würde dann umso mehr mein Leben normal leben wollen.");
                await ƒS.Speech.tell(characters.mutter, "Das mag ja sein... aber dann hat sie umso größere Schmerzen und verkürzt sogar ihr Leben....");
                await ƒS.Speech.tell(characters.protagonist, "Aber ist ein kürzeres erfülltes Leben nicht schöner als ein längeres unerfülltes Leben? Also hätte ich die Wahl würde ich mich auch dafür entscheiden...");
                await ƒS.Speech.tell(characters.mutter, "Aber sie ist ja nicht die Einzige, die leidet... die Menschen um sie herum leiden mit ihr...");
                await ƒS.update();
                await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
                await ƒS.Character.hide(characters.mutter);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Dennoch ist es ihr Leben und ihre Entscheidung...");
                await ƒS.Speech.tell(characters.narrator, "Sara, welche voller Schmerzen am Boden liegt, hat das Gespräch gerade noch so mitangehört... jedoch wird ihr schwarz vor Augen und sie verliert ihr Bewusstsein.");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.frownCasual, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.sara, "Mama....aaaa...");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.frownCasual, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                await ƒS.update();
                await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.mutter, "SARA!");
                await ƒS.update();
                await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
                await ƒS.Character.hide(characters.mutter);
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, "Der Notarzt stürmt rein und kümmert sich sofort um Sara, welche gerade dabei ist ihr Bewusstsein zu verlieren. Sie packen sie auf die Liege und laufen zum Krankenwagen. Ihre Mutter steigt mit ein und verabschiedet sich.");
                await ƒS.Speech.tell(characters.protagonist, "Viel Glück! Ich bete für sie....");
                await ƒS.Speech.tell(characters.narrator, "Der Krankenwagen fährt weg und der Protagonist macht sich schweren Herzens auf den Weg nachhause. Seine Gedanken lassen ihn nicht in Ruhe und die nächste Zeit verbringt er in unruhiger Sorge um Sara.");
                return "chapterSix"
        };
       };
    }