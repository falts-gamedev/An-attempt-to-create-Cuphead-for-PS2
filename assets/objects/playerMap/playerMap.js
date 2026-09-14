class PlayerMap {
    constructor(characterType = 0, playerControllerPort = 0) {
        this.transform = {
            position: {x: 0, y: 0},
            scale: {x: 1, y: 1},
            rotation: 0,
        }
        this.speed = 4;

        this.camera_pos = {x: 0, y: 0};
        this.camera_speed = 0.1;

        this.view = {
            layer: 1,
            visible: true,
            process: true // Pausado ou não
        }

        this.controller = new PlayerMapController(this, playerControllerPort); 
        this.animation_manager = new PlayerMapAnimationManager(this, 0);
        this.proprieties = new PlayerMapProprieties();
    };

    update() {
        if(!this.proprieties.isTalking) { // Atualiza posição da camera, os objetos ainda precisam de mover 
            this.camera_pos.x += (this.camera_pos.x - this.transform.position.x) * this.camera_speed;
            this.camera_pos.y += (this.camera_pos.y - this.transform.position.y) * this.camera_speed;
        }

        this.controller.update();
        this.animation_manager.update();
    };
}

class PlayerMapController {
    constructor(inheritedPlayerClass /*Classe do player herdado*/, playerControllerPort = 0) {
        this.player = inheritedPlayerClass;
        this.pad = Pads.get(playerControllerPort);
    }
    
    _getMovement() {
        const direction = this._getJoystickDirection(this.pad.lx, this.pad.ly);

        switch (direction) {
            case 0:
                console.log("buh")
                this.player.transform.position.y -= this.player.speed;
                break;
            
            case 2:
                this.player.transform.position.x += this.player.speed;
                break;
            
            case 4:
                this.player.transform.position.y += this.player.speed;
                break;
            
            case 6:
                this.player.transform.position.x -= this.player.speed;
                break;
        }
    };

    _getJoystickDirection(x, y) { // Separa o Joystick em 8 direções / 0 UP. 1 UP_RIGHT. 2 RIGHT...
        const magnitude = Math.hypot(x, y);

        if (magnitude <= globalThis.settings.controllerPreferences.deadzone)
            return -1;

        const angle = Math.atan2(y, x);
        const sector = Math.PI / 4;

        return (Math.round(angle / sector) + 8) % 8;
    };

    update(){
        this._getMovement(); // Chama função para atualizar inputs
    };

}