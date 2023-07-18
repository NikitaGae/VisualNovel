namespace VisualNovel {
    export async function chapterSeven(): ƒS.SceneReturn {
        console.log("Chapter 7");
        await ƒS.Location.show(locations.konzertHalle);
        await ƒS.update(transition.blink.duration, transition.blink.alpha, transition.blink.edge);
        await ƒS.Speech.tell(characters.narrator, "Der große Tag ist gekommen und der Protagonist geht mit schwerem Herzen zum Konzert. ");
        await ƒS.Speech.tell(characters.narrator, "Es ist sichtlich ausgebucht und überfüllt. Irgendwo hinten findet er einen Platz und setzt sich. Der Saal wird leise, denn es beginnt und der Vorhang öffnet sich.");
        await ƒS.Speech.tell(characters.protagonist, "Wow... sie ist super Klasse... und wunderschön...");
        ƒS.Sound.fade(sound.beethoven_mvt3, 0.1, 2, true);
        await ƒS.Speech.tell(characters.narrator, "Das Konzert läuft bisher ohne Probleme und Sara scheint es gut zu gehen. Man merkt, dass sie lange auf diesen Moment gewartet hat, denn sie spielt als würde ihr die Bühne alleine gehören.");
        await ƒS.Speech.tell(characters.narrator, "Auch wenn alle perfekt spielen, sticht sie allein extrem heraus, als würden alle um sie herumspielen. ");

        if(dataForSave.saraScore >= 70) {
            await ƒS.Speech.tell(characters.narrator, "Das komplette Konzert fühlt sich an, als würde sie eine Geschichte erzählen und der Saal hört ihr zu... die Geschichte ihres Lebens und ihres Schmerzens...");
            await ƒS.Speech.tell(characters.narrator, "den sie teilen möchte, aber nie konnte. Es fühlt sich an, als wäre es der Moment, an dem sie alles raus lässt... Als würde ihre Musik mit ihr weinen.");
            await ƒS.Speech.tell(characters.protagonist, "Es ist so wunderschön...");
            await ƒS.Speech.tell(characters.narrator, "Sara ist konzentriert, jedoch schaut sie in einem Moment direkt zum Protagonisten, als wüsste sie genau, wo er sitzen würde. Sie lächelt ihn an und ihre Lippen bewegen sich. ");
            await ƒS.Speech.tell(characters.narrator, "Die Musik ist zu laut, um es verstehen zu können. Jedoch wusste der Protagonist genau, was sie gesagt hat. ");
            await ƒS.Speech.tell(characters.narrator, "DANKE");
            await ƒS.Speech.tell(characters.protagonist, "Ich danke dir Sara...");
            await ƒS.Speech.tell(characters.narrator, "Das Konzert verläuft exzellent... der komplette Saal tobt und jubelt. Es war wie ein Finale... und es fühlt sich an wie ein Happy Ending. Nach dem Konzert geht der Protagonist hinter die Bühne, um Sara zu beglückwünschen.");
            await ƒS.update();
            await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("outToRight"));
            await ƒS.update();
            await ƒS.Speech.tell(characters.sara, characters.protagonist.name + ", du bist hier! ");
            await ƒS.Speech.tell(characters.protagonist, "Natürlich, ich konnte es nicht verpassen...");
            await ƒS.Speech.tell(characters.sara, "Danke dir, es bedeutet mir viel!");
                if(dataForSave.disputeWithSara == true) {
                        await ƒS.Speech.tell(characters.protagonist, "Hör zu... ich wollte mich für gestern entschuldigen... ich hatte nicht das Recht dir etwas vorzuschreiben... ich hab mir nur Sorgen gemacht.");
                        await ƒS.Speech.tell(characters.sara, "Mach dir keinen Kopf, mir tut es auch leid... ich hätte nicht so ausflippen sollen... nur hör ich das so oft, dass mich das frustriert hat.");
                        await ƒS.Speech.tell(characters.protagonist, "Dann ist alles wieder gut zwischen uns?");
                        await ƒS.Speech.tell(characters.sara, "Natürlich... ich lasse doch nicht meinen einzigen Freund davonkommen.");
                    }

            await ƒS.Speech.tell(characters.protagonist, "Jedenfalls warst du unglaublich! Du hast so gut gespielt! Noch viel viel besser als in den Proben, das war ja so ein atemberaubendes Gefühl deiner Musik zuzuhören!");
            await ƒS.Speech.tell(characters.sara, "Ach was, ich war nicht alleine da oben...");
            await ƒS.Speech.tell(characters.protagonist, "Es hat sich aber so angefühlt... du warst der Mittelpunkt und dein Kleid stand dir so gut!");
            await ƒS.Speech.tell(characters.sara, "Danke... ");
            await ƒS.Speech.tell(characters.protagonist, "...");
            await ƒS.Speech.tell(characters.sara, "Jedenfalls wurde schon ein neues Konzert angekündigt, da dieses ja so gut wurde... und ich soll wieder mitmachen! ");
            await ƒS.Speech.tell(characters.protagonist, "Das freut mich für dich! Dann hast du ja wieder viel Arbeit vor dir...");
            await ƒS.Speech.tell(characters.sara, "Wir haben viel Arbeit vor uns... ich könnte wieder Hilfe beim Üben gebrauchen... natürlich, nur wenn du willst...");
            await ƒS.Speech.tell(characters.protagonist, "Liebend gern.");
            await ƒS.Character.animate(characters.sara, characters.sara.pose.shoutCasual, animate("rightOut"));
            await ƒS.Character.hide(characters.sara);
            await ƒS.Speech.tell(characters.narrator, "Sara und der Protagonist lächeln sich an... Der Protagonist und Sara verbrachten noch viele Nächte zusammen und übten für unzählige Konzerte. Irgendwann überredete Sara den Protagonisten zum Mitspielen und sie spielten zusammen noch schönere Musik. ");
            await ƒS.Speech.tell(characters.narrator, "Doch wer hätte es gedacht, dass diese eine magische Nacht nicht nur zauberhafte Musik, sondern auch eine zauberhafte Wirkung mit sich bringt.");
            await ƒS.Speech.tell(characters.narrator, "Immerhin haben sich Saras Anfälle seitdem minimiert und wurden schwächer... sie wirkte gesünder und fing an ihr Leben zu leben. Vielleicht fehlten da nur etwas Freundschaft und gute Musik?");
    
        }


        if(dataForSave.saraScore < 100) {
        
        await ƒS.Speech.tell(characters.narrator, "");
        await ƒS.Speech.tell(characters.protagonist, "");
        await ƒS.Speech.tell(characters.sara, "");
        await ƒS.Speech.tell(characters.narrator, "Die Stimmung wechselt plötzlich... obwohl nichts passiert, spürt man, dass etwas nicht stimmt. Der Protagonist möchte loslaufen, aber weiß nicht wieso oder wohin.");
        await ƒS.Speech.tell(characters.narrator, "Sara spielt, als wäre es ihr letztes Konzert... ihre letzte Musik. Die Musik ist wundervoll, jedoch erdrückend. Sie spielt so voller Energie und jeder ihrer Tastenschläge klingt wie ein eigenes Lied. ");
        await ƒS.Speech.tell(characters.protagonist, "Irgendwas stimmt hier wieder nicht...");
        await ƒS.Speech.tell(characters.narrator, "Im Saal erstreckt sich eine wunderschöne, jedoch traurige Stimmung... vielen Leuten kommen die Tränen, weil die Musik eine traurige Geschichte erzählt. Viele verstehen sie nicht, doch der Protagonist weiß genau, dass Sara ihre Geschichte erzählt ... ");
        await ƒS.Speech.tell(characters.narrator, "die Geschichte ihres Lebens und ihres Schmerzens... den sie teilen möchte, aber nie konnte. Es fühlt sich an, als wäre es der Moment, an dem sie alles raus lässt... Als würde ihre Musik mit ihr weinen. ");
        await ƒS.Speech.tell(characters.protagonist, "Was passiert hier?");
        await ƒS.Speech.tell(characters.narrator, "Das Konzert ist fast vorbei und Sara spielt ohne Halt. Der Saal ist gefüllt voller Emotionen... wunderschöner Emotionen... Und in den letzten Sekunden, genau wann das Lied vorbei sein sollte.... ");
        await ƒS.Speech.tell(characters.narrator, "kippt Sara nach ihrem letzten Tastenschlag um. Alle sind schockiert und sofort wird ihr Hilfe geleistet... der Protagonist sitzt schockiert auf seinem Platz und spricht etwas vor sich hin...");
        await ƒS.Speech.tell(characters.protagonist, "Du wusstest, dass es dein letztes Konzert war, nicht wahr?... Du hieltst bis zum Schluss durch, um das Lied zu beenden... Sara.... deswegen hattest du Tränen in den Augen und hast dich bedankt... ");
        await ƒS.Speech.tell(characters.narrator, "Der Krankenwagen ist da und versucht Sara noch zu reanimieren.... ihre Mutter steht weinend daneben.... Der Protagonist kann sich nicht bewegen... er schaut aus dem Fenster... es ist Vollmond. Der Protagonisten kommen die Tränen...");
        await ƒS.Speech.tell(characters.protagonist, "Moonlight Sonata... wie eine Blume zwischen zwei Abgründen...");
        await ƒS.Speech.tell(characters.narrator, "Der Saal wird plötzlich ruhig und alle halten den Atem an. Einer der Notärzte steht da und spricht: Sie ist tot... wir konnten leider nichts für sie tun...");
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("outToRight"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.mutter, "SARA, MEIN SCHATZ! NEIN, BITTE WACH AUF! WARUM NUR?");
        await ƒS.update();
        await ƒS.Character.animate(characters.mutter, characters.mutter.pose.happy, animate("rightOut"));
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, "Und wie der Titel des Liedes... “Moonlight Sonata”, scheint ein Mondstrahl durch das Fenster auf Sara. Und vielleicht kommt es dem Protagonisten nur so vor... jedoch sieht es so aus, als würden die Mondstrahlen Saras Seele befreien und mit zu sich aufziehen.");
        await ƒS.Speech.tell(characters.protagonist, "Du bist nun selbst das Mondlicht, Sara...");
        await ƒS.Speech.tell(characters.narrator, "Der Protagonist schaut dem Mondlicht entgegen... es scheint hell, heller als die Sonne... zumindest fühlt es sich in diesem Moment danach an. Genau in diesem Moment verschwindet das Licht, denn eine Wolke hat sich davorgeschoben.");
        await ƒS.Speech.tell(characters.protagonist, "Ich danke dir für alles...");
        await ƒS.Location.show(locations.endChapterOne);

        await ƒS.Text.print("<div class='newspaper'><h1>Junge Dame verfällt ihrer <br> Krankheit welche ihren Körper  <br> schwächt nachdem sie an einem  <br> Konzert in voller Länge gespielt  <br> hat</h1></div>");

        await ƒS.Speech.tell(characters.narrator, "Der Abend ging als Tragödie in die Geschichte ein und lange wurde noch darüber geredet. Doch irgendwann wurde geschwiegen und vergessen... außer einer. Der Protagonist erinnerte sich immer an Sara, wenn er den Mond sah... es war als würde er zu ihm sprechen.");
        await ƒS.Speech.tell(characters.narrator, "Der Protagonist konnte ihn nicht verstehen, aber er wusste, dass Sara ihm eine Nachricht schickte. Eine Nachricht, die ihn wieder zur Musik bringen sollte.");
        await ƒS.Speech.tell(characters.narrator, "Und so nahm der Protagonist es als Saras letzten Wunsch und fing an wieder zu spielen... für sie. Es war wunderschöne und zeitgleich traurige Musik... so wie sie Sara gespielt hatte. ");
        await ƒS.Speech.tell(characters.narrator, "Moonlight Sonata");
        }
        await ƒS.update();
        await ƒS.Location.show(locations.credits);
       };
    }