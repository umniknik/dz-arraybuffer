// import ArrayBufferConverter from './arrayBufferConverter';

export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

// const aa = new ArrayBufferConverter();
// aa.load(getBuffer());
// const bb = aa.toString();
// console.log(aa);
// console.log(bb);
