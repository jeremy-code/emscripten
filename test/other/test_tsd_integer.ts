import moduleFactory from './test_emit_tsd_integer.js';

async function go() {
  const module = await moduleFactory();
  module.POINTER_SIZE;
}
