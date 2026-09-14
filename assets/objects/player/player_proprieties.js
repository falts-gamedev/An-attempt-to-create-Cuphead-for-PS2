class PlayerProprieties {
    constructor(characterType) { // Passa qual tipo de personagem é  (0 = Cuphead ou Mugman / 1 = Ms.Chalice [Se houver algum dia]))
        // Propriedades constantes
        this.WALK_SPEED = 20;
        this.JUMP_FORCE = 20;
        this.JUMP_MAX_TIME = 120;


        this.state = "";
        this.jump_time = 0;

        // Propriedades principais
        this.dead = false;

        // Verificações
        this.isJumping = false;
        this.isWalking = false;
        this.isDashing = false;
        this.isDuck = false;
        this.isAiming = false;
        this.isShooting = false;
        this.isGhost = false;
    }
}