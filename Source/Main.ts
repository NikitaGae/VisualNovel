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
    beethoven_mvt1_rechts: "Assets/Audio/rechts.mp3",
    beethoven_mvt1_links: "Assets/Audio/links.mp3",
    brakes: "Assets/Audio/brake.mp3",
    ambulance: "Assets/Audio/distant-ambulance-siren-6108.mp3"
  };

  export let locations = {
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
    

    endChapterOne: {
      name: "endChapterOne",
      background: "Assets/Locations/endChapterOne.png"
    },
    

    
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

    herrYamamoto: {
      name: "Herr Yamamoto",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Assets/Characters/1.png"
      }
    },

    sara: {
      name: "Sara",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        frown: "Assets/Characters/Miki_PoseD_Summer_Frown.png",
        open: "Assets/Characters/Miki_PoseD_Summer_Open.png",
        shout: "Assets/Characters/Miki_PoseD_Summer_Shout.png",
        smile: "Assets/Characters/Miki_PoseD_Summer_Smile.png",
      }
    },
    
    mutter: {
      name: "Mutter",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "Assets/Characters/mutter.png"
      }
    },
  }

  let inGameButtons = {
    save: "save",
    load: "load",
    close: "close",
  };

  let gameMenu: ƒS.Menu;

  let menuIsOpen: boolean = true;

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
    nameProtagonist: "",
    saraScore: 0,
    scoreForAisaka: "",

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