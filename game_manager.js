let scene = 0; // Cena atual, 0 = Menu principal; 1 = Dentro do mapa; 2 = Dentro de uma fase; 3 = Cutscene; 4 = Creditos;



os.setInterval(() => {
    Screen.clear();
    Screen.flip();
}, 0);

globalThis.sceneLoader = function(scene_idx) { // Carrega e descarrega as cenas
    if (scene_idx === 1) {

    }
}

function sceneUnloader(scene_idx) {
    
}