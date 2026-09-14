class PlayerMapAnimationManager{
    constructor(inheritedPlayerClass, character) {// Passa qual personagem é (0 = cuphead, 1 = mugman, 2 = chalice
        this.player = inheritedPlayerClass;
    }

    update() {
        Draw.rect(this.player.transform.position.x, this.player.transform.position.y, 30, 40, Color.new(255, 0, 0));
    }


}