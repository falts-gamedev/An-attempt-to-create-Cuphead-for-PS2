const settings = std.loadScript('assets/settings.js')
globalThis.currentScene = 0; // Cena atual, 0 = Menu principal; 1 = Dentro do mapa; 2 = Dentro de uma fase; 3 = Cutscene; 4 = Creditos;
globalThis.currentLevel = "tutorial";

let scenesLoaded = []; // Cenas que precisa dar update

function loadClasses() {
    //std.loadScript('assets/objects/player/player_animation_manager.js');
    //std.loadScript('assets/objects/player/player_proprieties.js');
    //std.loadScript('assets/objects/player/player.js');
    std.loadScript('assets/objects/playerMap/playerMap.js');
    std.loadScript('assets/objects/playerMap/playerMap_proprieties.js');
    std.loadScript('assets/objects/playerMap/playerMap_animation_manager.js');
    std.loadScript('assets/scenes/map.js');
}
loadClasses();

os.setInterval(() => {
    Screen.clear();
    scenesLoaded.forEach((obj) => {
        obj.update();
    })
    
    Screen.flip();
}, 0); // 60fps

// Simple scene manager (
/*  Carrega e descarrega as cenas. Essa função apenas é responsável por cenas locais, 
    cenas globais são idependentes e precisam ser carregadas e descarregadas manualmente */
globalThis.sceneLoader = function(scene = "") { 
    console.log("unknown scene ");
    _sceneUnloader()

    if (scene === "map") {
        scenesLoaded.push(new MapScene()); 
        globalThis.currentScene = 1;
        globalThis.currentLevel = scene;
    }
    else {
        console.log("unknown scene ");
        return "unknown scene";
    }
    console.log("done ");
    return "done";
}

function _sceneUnloader() {
    scenesLoaded.length = 0; //  Limpa os elementos
    return 0;
}
// )

globalThis.sceneLoader("map")
