class PlayerMapProprieties {
    constructor() {
        // Propriedades constantes
        const WALK_SPEED = 20;
        const JUMP_FORCE = 20;
        const JUMP_MAX_TIME = 120;


        this.state = "";
        this.jump_time = 0;


        // Verificações
        this.isWalking = false;
        this.isTalking = false;
    }
}