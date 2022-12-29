namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let transition = {
    swirl: {
      duration: 1,
      alpha: "Transitions/swirl.png",
      edge: 1
    }
  };

  export let sound = {
    drop: "Audio/Nightclub.ogg"
  };

  export let locations = {
    benchKun: {
      name: "Bench Kun",
      background: "Locations/bg_bench.png"
    }
  };

  export let newPositions = {
    bottomleft: new FudgeStory.Position(-470, -540),
    bottomright: new FudgeStory.Position(470, -540),
    bottomcenter: new FudgeStory.Position(0, -540),
    rightout: new FudgeStory.Position(2470, -540),
    leftout: new FudgeStory.Position(-2470, -540)
  };

  export let characters = {
    narrator: {
      name: ""
    },
    protagonist: {
      name: ""
    },
    rimuru: {
      name: "Rimuru",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Characters/cat_happy.png"
      }
    }
  }

  let inGameButtons = {
    save: "save",
    load: "load",
    close: "close",
  };

  let gameMenu: ƒS.Menu;

  let menuIsOpen: boolean = true;

  export function animation(): ƒS.AnimationDefinition {
    return {
      start: {translation: ƒS.positions.bottomcenter},
      end: {translation: ƒS.positions.bottomright},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP
    };
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log("hi");
    switch (_option) {
      case inGameButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
    }
  }

  export let items = {
    name: "",
    description: "",
    static: ""
  }

  document.addEventListener("keydown", hndKeyPress);

  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("save");
        ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("load");
        ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        } else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }

  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: GreatRimuru, name: "GreatRimuru", id: "GreatRimuru" }
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}