
class Player{
    constructor(characterType = 0, playerControllerPort) {
        this.transform = {
            position: {x: 0, y: 0},
            scale: {x: 1, y: 1},
            rotation: 0,
        }

        this.camera_pos = {x: 0, y: 0};
        this.camera_speed = 0.1;

        this.view = {
            layer: 1,
            visible: true,
            process: true, // Se estiver pausado: false!

        }

        this.animationManager = new PlayerAnimationManager();
        this.proprieties = new PlayerProprieties(characterType);
        this.controller = new PlayerController(this, playerControllerPort);
    }

}

class PlayerController{
    constructor(inheritedPlayerClass /*Classe do player herdado*/, playerControllerPort = 0){ // Define qual controle (primeiro ou segundo) controla o player
        this.player = inheritedPlayerClass;
        this.pad = Pads.get(playerControllerPort);
    }


    update() {
        _checkInputs(); // Chama função para atualizar inputs

    };

    _checkInputs() { // Verifica os inputs
        let direction = _getJoystickDirection;
        if (direction === 0) {
            this.player.proprieties
        }
        return;
    };

    _getJoystickDirection(x, y) { // Separa o Joystick em 8 direções / 0 UP. 1 UP_RIGHT. 2 RIGHT...
        const magnitude = Math.hypot(x, y);

        if (magnitude <= globalThis.settings.controllerPreferences.deadzone) {
            return -1;
        }

        const angle = Math.atan2(y, x);
        const sector = Math.PI / 4;

        return (Math.round(angle / sector) + 8) % 8;
    };

    
}