namespace VisualNovel {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let transition = {
    swirl: {
      duration: 1,
      alpha: "Assets/Transitions/swirl.png",
      edge: 1
    },

    blink: {
      duration: 3,
      alpha: "Assets/Transitions/blink2.png",
      edge: 1
    },
    
    u: {
      duration: 3,
      alpha: "Assets/Transitions/9.jpg",
      edge: 1
    },

    uu: {
      duration: 3,
      alpha: "Assets/Transitions/circlewipe-ccw.jpg",
      edge: 1
    },

    uuu: {
      duration: 3,
      alpha: "Assets/Transitions/circlewipe-cw.jpg",
      edge: 1
    },

    uuuu: {
      duration: 3,
      alpha: "Assets/Transitions/cw-side.jpg",
      edge: 1
    }
  };

  export let sound = {
    cicada: "Assets/Audio/cicada-sound-64528.mp3",
    sadEnd: "Assets/Audio/Sad_End.mp3",
    happyEnd: "Assets/Audio/Happy_End.mp3",
    beethoven_mvt1: "Assets/Audio/Beethoven_Moonlight_1st_movement.ogg",
    beethoven_mvt2: "Assets/Audio/Beethoven_Moonlight_2nd_movement.ogg",
    beethoven_mvt3: "Assets/Audio/Beethoven_Moonlight_3rd_movement.ogg",
  };

  export let locations = {
    classroom: {
      name: "classroom",
      background: "Assets/Locations/classroom.jpg"
    },

    endSit: {
      name: "endSit",
      background: "Assets/Locations/endSit.png"
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
      name: "Narrator"
    },
    protagonist: {
      name: "Ich"
    },

    HerrYamamoto: {
      name: "Herr Yamamoto"
    },
    
    rimuru: {
      name: "Rimuru",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Assets/Characters/cat_happy.png"
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
    gameMenu = ƒS.Menu.create(inGameButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: ChapterOne, name: "ChapterOne", id: "ChapterOne" },
      { scene: endSit, name: "endSit", id: "endSit" },
      { scene: standUp, name: "standUp", id: "standUp" }, 
      
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}