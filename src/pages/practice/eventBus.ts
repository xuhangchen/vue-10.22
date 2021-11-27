// eventBus.js
import mitt from 'mitt';

export const emitter = mitt();
export default {
    // eslint-disable-next-line @typescript-eslint/ban-types
    $on: (funName: string, fun: Function) => emitter.on(funName, fun()),
    // $once: (...args) => emitter.once(...args),
    // $off: (...args) => emitter.off(...args),
    $emit: (funName: string, args: any) => emitter.emit(funName, args),
};
