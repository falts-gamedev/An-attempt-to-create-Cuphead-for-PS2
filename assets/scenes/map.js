class MapScene{
    constructor() {
        this.nodes = {
            player: new PlayerMap(0, 0),
        }

        this.camera = {
            x: this.nodes.player.camera_pos.x,
            y: this.nodes.player.camera_pos.y
        }
    }

    update() { //  Atualizar os nodes (Sim estou usando nomes da godot bruh)
        Object.values(this.nodes).forEach(node => {
            if (node.view.process) {
                node.update();
            }
        });
    }
}