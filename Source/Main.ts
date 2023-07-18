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

  export let sound = {
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
        blush: "Assets/Characters/Miki_Casual_PoseD_Open_Blush.png",
        smileCasual: "Assets/Characters/Miki_Casual_PoseD_Smile.png",
        frownCasual: "Assets/Characters/Miki_Casual_PoseD_Frown.png",
        shoutCasual: "Assets/Characters/Miki_Casual_PoseD_Shout.png",
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

  export let animations = {
    rightOut: "rightOut",
    outToRight: "outToRight",
  };

  export function animate(_animation: string): ƒS.AnimationDefinition {
    switch (_animation) {

      case animations.rightOut:
        return {
          start: { translation: newPositions.bottomright },
          end: { translation: newPositions.rightout },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

        case animations.outToRight:
        return {
          start: { translation: newPositions.rightout },
          end: { translation: newPositions.bottomright },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };

      default:
        return {
          start: { translation: ƒS.positions.bottomcenter },
          end: { translation: ƒS.positions.bottomcenter },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
  }


  export let items = {
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
      case ƒ.KEYBOARD_CODE.I:
        console.log("open inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }

  export let dataForSave = {
    nameProtagonist: "",
    saraScore: 0,
    scoreForSara: "",
    disputeWithSara: false,
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameButtons, buttonFunctionalities, "gameMenu");
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { scene: chapterOne, name: "chapterOne", id: "chapterOne" },
      { scene: endSit, name: "endSit", id: "endSit" },
      { scene: standUp, name: "standUp", id: "standUp" }, 
      { scene: chapterTwo, name: "chapterTwo", id: "chapterTwo" }, 
      { scene: chapterThree, name: "chapterThree", id: "chapterThree" }, 
      { scene: ChapterFour, name: "chapterFour", id: "chapterFour" }, 
      { scene: chapterFive, name: "chapterFive", id: "chapterFive" }, 
      { scene: chapterSix, name: "chapterSix", id: "chapterSix" },
      { scene: chapterSeven, name: "chapterSeven", id: "chapterSeven" },
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}