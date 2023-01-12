namespace VisualNovel {
    export async function endSit(): ƒS.SceneReturn {
        
        await ƒS.Sound.play(sound.sadEnd, 0.1, true);
        await ƒS.Location.show(locations.endSit);
        await ƒS.update();
        
    }
}