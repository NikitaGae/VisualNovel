declare namespace VisualNovel {
    function chapterFive(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function ChapterFour(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function chapterOne(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function chapterSeven(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function chapterSix(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function chapterThree(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function chapterTwo(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function endSit(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        blink: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        cicada: string;
        sadEnd: string;
        happyEnd: string;
        beethoven_mvt1: string;
        beethoven_mvt2: string;
        beethoven_mvt3: string;
        beethoven_mvt1_rechts: string;
        beethoven_mvt1_links: string;
        brakes: string;
        ambulance: string;
        talking: string;
        doorbell: string;
        door: string;
        knocking: string;
    };
    let locations: {
        classroom: {
            name: string;
            background: string;
        };
        endSit: {
            name: string;
            background: string;
        };
        musicClub: {
            name: string;
            background: string;
        };
        dreiTueren: {
            name: string;
            background: string;
        };
        endChapterOne: {
            name: string;
            background: string;
        };
        blumenladen: {
            name: string;
            background: string;
        };
        saraHausTreppe: {
            name: string;
            background: string;
        };
        sarasZimmer: {
            name: string;
            background: string;
        };
        schulgang: {
            name: string;
            background: string;
        };
        spielhalle: {
            name: string;
            background: string;
        };
        stadtInneren: {
            name: string;
            background: string;
        };
        vorDemHausVonSara: {
            name: string;
            background: string;
        };
        zimmerMitKlavierBeiSara: {
            name: string;
            background: string;
        };
        konzertHalle: {
            name: string;
            background: string;
        };
        krankenhauszimmer: {
            name: string;
            background: string;
        };
        credits: {
            name: string;
            background: string;
        };
        headphones: {
            name: string;
            background: string;
        };
        gameOver: {
            name: string;
            background: string;
        };
    };
    let newPositions: {
        bottomleft: ƒ.Vector2;
        bottomright: ƒ.Vector2;
        bottomcenter: ƒ.Vector2;
        rightout: ƒ.Vector2;
        leftout: ƒ.Vector2;
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        herrYamamoto: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        sara: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                frown: string;
                open: string;
                shout: string;
                smile: string;
                blush: string;
                smileCasual: string;
                frownCasual: string;
                shoutCasual: string;
            };
        };
        mutter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
    };
    let animations: {
        rightOut: string;
        outToRight: string;
    };
    function animate(_animation: string): ƒS.AnimationDefinition;
    let items: {
        keychain: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        flowers: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        studendCard: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        saraScore: number;
        scoreForSara: string;
        disputeWithSara: boolean;
    };
}
declare namespace VisualNovel {
    function standUp(): ƒS.SceneReturn;
}
