const buffer = new ArrayBuffer(32); // buffer size is 32 bytes
const uint8 = new Uint8Array(buffer);
// Data manually written here, but pretend it was already in the buffer
// uint8.set([228, 189, 160, 229, 165, 189]);
// console.log(text); // 你好
uint8.set([108, 97, 108, 105, 116]);
const text = new TextDecoder().decode(uint8);
console.log(text); // abcdefghijklmnopqrstuvwxyz