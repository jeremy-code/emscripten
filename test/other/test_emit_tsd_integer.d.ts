// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    let POINTER_SIZE: number;
}
interface WasmModule {
  _fooVoid(): void;
  _fooInt(_0: number, _1: number): number;
  _main(_0: number, _1: number): number;
}

export type MainModule = WasmModule & typeof RuntimeExports;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
