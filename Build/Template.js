"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transition = {
        swirl: {
            duration: 1,
            alpha: "Transitions/swirl.png",
            edge: 1
        }
    };
    Template.sound = {
        drop: "Audio/Nightclub.ogg"
    };
    Template.locations = {
        benchKun: {
            name: "Bench Kun",
            background: "Locations/bg_bench.png"
        }
    };
    Template.newPositions = {
        bottomleft: new FudgeStory.Position(-470, -540),
        bottomright: new FudgeStory.Position(470, -540),
        bottomcenter: new FudgeStory.Position(0, -540),
        rightout: new FudgeStory.Position(2470, -540),
        leftout: new FudgeStory.Position(-2470, -540)
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        rimuru: {
            name: "Rimuru",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Characters/cat_happy.png"
            }
        }
    };
    let inGameButtons = {
        save: "save",
        load: "load",
        close: "close",
    };
    let gameMenu;
    let menuIsOpen = true;
    function animation() {
        return {
            start: { translation: Template.ƒS.positions.bottomcenter },
            end: { translation: Template.ƒS.positions.bottomright },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.animation = animation;
    async function buttonFunctionalities(_option) {
        console.log("hi");
        switch (_option) {
            case inGameButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameButtons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("save");
                Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("load");
                Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: Template.GreatRimuru, name: "GreatRimuru", id: "GreatRimuru" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function GreatRimuru() {
        console.log("Episode 1: Great Rimuru");
        let text = {
            Narrator: {
                T0001: "There is a Cat that looks super cute",
            }
        };
        await Template.ƒS.Sound.play(Template.sound.drop, 0.4, true);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.benchKun);
        await Template.ƒS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0001);
        await Template.ƒS.Character.show(Template.characters.rimuru, Template.characters.rimuru.pose.happy, Template.newPositions.bottomcenter);
        await Template.ƒS.Character.animate(Template.characters.rimuru, Template.characters.rimuru.pose.happy, Template.animation());
        await Template.ƒS.update();
        let dialogue = {
            iSayYes: "Yes",
            iSayOkay: "Okay",
            iSayNo: "No"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("gg");
                break;
            case dialogue.iSayOkay:
                console.log("gg");
                break;
            case dialogue.iSayNo:
                console.log("gg");
                break;
        }
        ;
    }
    Template.GreatRimuru = GreatRimuru;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map