// Propriedades constantes
const WALK_SPEED = 20;
const JUMP_FORCE = 20;
const JUMP_MAX_TIME = 120;

let jump_time = 0;

// Propriedades principais
let tranform = {
    position: {x: 1, y: 2},
    scale: {x: 1, y: 2},
    rotation: 0,
}
let view = {
    layer: 1,
    visible: true
}
let dead = false;

// Verificações
let isJumping = false;
let isWalking = false;
let isDashing = false;
let isDuck = false;
let isAiming = false;
let isShooting = false;
let isGhost = false;