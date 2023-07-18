namespace VisualNovel {
    export async function endSit(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.gameOver);
        ƒS.Sound.fade(sound.beethoven_mvt1, 0, 0, true);
        ƒS.Sound.fade(sound.sadEnd, 0.3, 0, true);
        await ƒS.update(3.9);
        ƒS.Sound.fade(sound.sadEnd, 0.0, 0, true);
        return "chapterOne";
    }
}