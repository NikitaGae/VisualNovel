namespace Template {
    export async function GreatRimuru(): ƒS.SceneReturn {
        console.log("Episode 1: Great Rimuru");

        let text = {
            Narrator: {
                T0001: "There is a Cat that looks super cute",
            }
        };
        await ƒS.Sound.play(sound.drop, 0.4, true);
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.benchKun);
        await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Character.show(characters.rimuru, characters.rimuru.pose.happy, newPositions.bottomcenter);
        await ƒS.Character.animate(characters.rimuru, characters.rimuru.pose.happy, animation());
        await ƒS.update();
        ƒS.Speech.clear();

        let dialogue = {
            iSayYes: "Yes",
            iSayOkay: "Okay",
            iSayNo: "No"
        }

        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");

        switch(dialogueElement) {
            case dialogue.iSayYes:
                console.log("gg");
                break;
            case dialogue.iSayOkay:
                console.log("gg");
                break;
            case dialogue.iSayNo:
                console.log("gg");
                break;                     
        };

    }
}