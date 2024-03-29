import { tickAll } from './index';

const mul: number = 1/(1000 * 60 * 60 * 24 * 365.25);
export const getYears = (ms: number) => ms * mul + 30;
export const getMs = (years: number) => (years - 30) / mul;
const getNow = () => getYears(Math.round((Date.now())));

export const loopState = {
    frame: 0,
    lastTick: getNow(),
    pointer: getNow(),
    speed: 1,
    fps: 0,
    lastFpsUpdate: getNow(),
    paused: false,
};

export function tick() {
    const now = getNow();
    if (loopState.paused) {
        loopState.lastFpsUpdate = now;
        loopState.lastTick = now;
        return;
    }
    loopState.pointer += (now - loopState.lastTick) * loopState.speed;
    if ((now - loopState.lastFpsUpdate) > mul * 1000) {
        loopState.lastFpsUpdate = now;
        loopState.fps = 1 / ((now - loopState.lastTick) / mul / 1000);
    }
    loopState.lastTick = now;
    loopState.frame += 1;
    tickAll(loopState.pointer);
}
