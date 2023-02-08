declare namespace VisualNovel {
    function ChapterOne(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function ChapterTwo(): ƒS.SceneReturn;
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
        u: {
            duration: number;
            alpha: string;
            edge: number;
        };
        uu: {
            duration: number;
            alpha: string;
            edge: number;
        };
        uuu: {
            duration: number;
            alpha: string;
            edge: number;
        };
        uuuu: {
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
        endChapterOne: {
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
    let items: {
        name: string;
        description: string;
        static: string;
    };
    let dataForSave: {
        nameProtagonist: string;
        saraScore: number;
        scoreForAisaka: string;
    };
}
declare namespace VisualNovel {
    function endSit(): ƒS.SceneReturn;
}
declare namespace VisualNovel {
    function standUp(): ƒS.SceneReturn;
}
