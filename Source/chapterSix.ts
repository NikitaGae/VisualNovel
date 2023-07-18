namespace VisualNovel {
    export async function chapterSix(): ƒS.SceneReturn {
        console.log("Chapter 6");
        await ƒS.Location.show(locations.endChapterOne);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        await ƒS.Speech.tell(characters.narrator, "Es war abends und Protagonist war auf dem Weg zu Sara ins Krankenhaus dieses Mal will er sie mit seiner Krankheit konfrontieren.");
        await ƒS.Speech.tell(characters.narrator, "Denn nach dem zweiten Vorfall kann er nicht einfach zusehen, wie Sara sich selbst verletzt.");
        await ƒS.Speech.tell(characters.narrator, characters.protagonist.name + " betritt das Krankenhaus und macht sich auf dem Weg zu ihrem Krankenzimmer.");
        await ƒS.update();
        await ƒS.Location.show(locations.krankenhauszimmer);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.update();
        ƒS.Sound.fade(sound.knocking, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.knocking, 0.0, 0, true);
        await ƒS.update();
        await ƒS.Character.animate(characters.sara, characters.sara.pose.frown, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.sara, "Herein.");
        await ƒS.update();
        ƒS.Sound.fade(sound.door, 0.3, 0, true);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.door, 0.0, 0, true);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Hey du... wie fühlst du dich?");
        await ƒS.Speech.tell(characters.sara, "Es geht... aber schon etwas besser...");
        await ƒS.Speech.tell(characters.protagonist, "Du hast mir einen Riesenschreck eingejagt... aber zum Glück scheint es dir besser zu gehen...");
        await ƒS.Speech.tell(characters.sara, "Ja...");
        await ƒS.Speech.tell(characters.protagonist, "Dann ist das Konzert wohl für dich erledigt?");
        await ƒS.Speech.tell(characters.sara, "Auf keinen Fall!");
        await ƒS.Speech.tell(characters.protagonist, "Was?!");
        await ƒS.Speech.tell(characters.sara, "Du glaubst wohl nicht, dass ich wegen einem kleinen Anfall das Handtuch werfe?");
        await ƒS.Speech.tell(characters.protagonist, "Kleiner Anfall? Wir dachten wir verlieren dich da als du dein Bewusstsein verloren hattest.... und es ist vor allem nicht der Erste. Laut deiner Mutter auch nicht der Zweite.");
        await ƒS.Speech.tell(characters.sara, "… meine Mutter hat es dir also erzählt?");
        await ƒS.Speech.tell(characters.protagonist, "Eher angedeutet...");
        await ƒS.Speech.tell(characters.sara, "Hör zu … es ist meine Sache, deswegen … egal was du sagst... du wirst mich nicht vom Konzert abhalten können.");

        let dialogueElement;

        let decision = {
            minus: "Warum nicht?",
            plus: "Dann unterstütze ich dich",
        };

        dialogueElement = await ƒS.Menu.getInput(decision, "decisionClass");

        switch(dialogueElement) {
            case decision.minus:
                dataForSave.saraScore -= 10;
                dataForSave.disputeWithSara = true;
                await ƒS.Speech.tell(characters.protagonist, ": Alle um dich herum machen sich Sorgen und wollen nicht, dass dir etwas passiert. Warum nimmst du nicht etwas Rücksicht auf die Menschen um dich herum? Du bist Ihnen allen wichtig... ");
                await ƒS.Speech.tell(characters.protagonist, "und wenn du wieder beim Konzert zusammenbrichst, dann sind die Mühen von Allen umsonst gewesen und das Konzert geht den Bach runter.");
                await ƒS.Speech.tell(characters.sara, "Die Mühen von Allen? Was ist mit meinen Mühen?!?! Warum muss ich immer einen Schritt zurück gehen und Rücksicht auf Andere nehmen?! ");
                await ƒS.Speech.tell(characters.sara, "Ich hab’s satt wegen meiner Krankheit immer mein Leben nicht leben zu können! ");
                await ƒS.Speech.tell(characters.protagonist, "Ich verstehe dich ja, aber...");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.frown, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.shout, animate("outToRight"));
                await ƒS.update();
                await ƒS.Speech.tell(characters.sara, "DU VERSTEHST MICH KEIN STÜCK! DU WEISST NICHT WIE ES IST DEIN GANZES LEBEN GANZ ALLEINE AN EIN KRANKENHAUS BETT GEFESSELT ZU SEIN UND VON ALLEN BEMITLEIDET ZU WERDEN UND NICHTS ZU ERLEBEN!");
                await ƒS.Speech.tell(characters.protagonist, "aber...");
                await ƒS.Speech.tell(characters.sara, "KEIN ABER! WAS IST DAS FÜR EIN LEBEN? WAS BRINGT ES MIR EIN LÄNGERES LEBEN ZU HABEN, WENN ICH ES HIER VERBRINGE? DANN STERBE ICH LIEBER!");
                await ƒS.Speech.tell(characters.protagonist, "Sara...");
                await ƒS.Speech.tell(characters.sara, "Nein, es reicht mir. Ich werde das Konzert antreten, selbst wenn es mein Leben verkürzt. Musik ist das Einzige, was mich am Leben hält... Ich habe sonst nichts... außer meiner Familie.");
                await ƒS.Speech.tell(characters.protagonist, "Das tut mir sehr leid... ich weiß ich habe kein Recht etwas zu sagen, ich bin nicht in deiner Lage... aber denk doch mal an deine Mutter...");
                await ƒS.Speech.tell(characters.sara, "Glaubst du das tue ich nicht? Ich denke jede Minute an sie... und wie ich mir wünschen würde, dass sie ein normales gesundes Kind hätte... statt mich. ");
                await ƒS.Speech.tell(characters.sara, "Es tut mir mehr weh sie so zu sehen als meine eigenen Schmerzen. Aber es tut mir auch weh mein Leben zu verpassen und alleine zu sein...");
                await ƒS.Speech.tell(characters.protagonist, "…");
                await ƒS.Speech.tell(characters.sara, "Durch das Konzert und die Proben mit den anderen verspüre ich wenigstens ein Hauch Leben in mir... ansonsten füllt sich’s an, als wäre ich bereits tot.");
                await ƒS.Speech.tell(characters.protagonist, "…");
                await ƒS.Speech.tell(characters.sara, "Bitte geh jetzt... ich möchte gerade allein sein...");
                await ƒS.Speech.tell(characters.protagonist, "Es tut mir leid... ");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.shout, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                ƒS.Sound.fade(sound.door, 0.3, 0, true);
                await ƒS.update(1);
                ƒS.Sound.fade(sound.door, 0.0, 0, true);
                await ƒS.update();   
                return "chapterSeven";
            case decision.plus:
                dataForSave.saraScore += 20;
                dataForSave.disputeWithSara == false;
                await ƒS.Speech.tell(characters.protagonist, "");
                await ƒS.Speech.tell(characters.sara, "");
                await ƒS.Speech.tell(characters.protagonist, "Ich habe nicht vor dich vom Konzert abzuhalten.");
                await ƒS.Speech.tell(characters.sara, "Warte was? ");
                await ƒS.Speech.tell(characters.protagonist, "Ja... liegt ja nicht in meiner Macht. Hast doch ‘nen eigenen Kopf?");
                await ƒS.Speech.tell(characters.sara, "Ja... aber... ");
                await ƒS.Speech.tell(characters.protagonist, "Was stammelst du so?");
                await ƒS.Speech.tell(characters.sara, "Ich habe deine Antwort absolut nicht erwartet... sonst will jeder, dass ich mich schone oder Rücksicht nehmen soll.");
                await ƒS.Speech.tell(characters.protagonist, "Natürlich will ich das auch, aber ich denke dir ist schon bewusst, was du machst... und egal was welchen Weg du gehst... ich begleite dich.");
                await ƒS.Speech.tell(characters.sara, "Danke... das bedeutet mir viel.");
                await ƒS.Speech.tell(characters.protagonist, "Wir sind doch schließlich Freunde und Freunde sind füreinander da.");
                await ƒS.Speech.tell(characters.sara, "Ich hatte nie wirklich Freunde... deswegen kenn ich das Gefühl nicht...");
                await ƒS.Speech.tell(characters.protagonist, "Was? Warum nicht... du bist doch klasse!");
                await ƒS.Speech.tell(characters.sara, "Die meisten Menschen fangen an mich zu meiden, sobald sie von meiner Krankheit erfahren... ich war mein ganzes Leben so ziemlich alleine...");
                await ƒS.Speech.tell(characters.protagonist, "Das tut mir leid... hättest du mich mal früher in der Schule mit deiner Musik angelockt.");
                await ƒS.Speech.tell(characters.sara, "Haha, du Witzbold.");
                await ƒS.Speech.tell(characters.protagonist, "Aber jetzt mal ehrlich, du hättest es mir früher sagen können... dann wäre ich mehr oder weniger vorbereitet gewesen.");
                await ƒS.Speech.tell(characters.sara, "Du hättest mich dann genau so verlassen ... wie alle anderen.");
                await ƒS.Speech.tell(characters.protagonist, "Das weißt du erst, sobald du’s gemacht hättest... ");
                await ƒS.Speech.tell(characters.sara, "Super toll");
                await ƒS.Speech.tell(characters.protagonist, "Nein, aber wirklich jetzt... komm jetzt erstmal wieder auf die Beine und dann spiel das Konzert deines Lebens... ich werde dir zuschauen und dabei sein.");
                await ƒS.Speech.tell(characters.sara, "Danke... dank dir fühle ich mich schon viel besser...");
                await ƒS.Speech.tell(characters.protagonist, "Das freut mich...");
                await ƒS.Speech.tell(characters.sara, " …");
                await ƒS.Speech.tell(characters.protagonist, "Nun gut... es wird spät, ich mach mich dann mal auf den Weg. Schlaf gut.");
                await ƒS.Speech.tell(characters.sara, "Du auch. ");
                await ƒS.update();
                await ƒS.Character.animate(characters.sara, characters.sara.pose.shout, animate("rightOut"));
                await ƒS.Character.hide(characters.sara);
                ƒS.Sound.fade(sound.door, 0.3, 0, true);
                await ƒS.update(1);
                ƒS.Sound.fade(sound.door, 0.0, 0, true);
                await ƒS.update();
                return "chapterSeven";
        };
       };
    }