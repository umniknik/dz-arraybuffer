export default class ArrayBufferConverter {
  load(value) {
    const bufferArray = new Uint16Array(value);
    const jsonString = String.fromCharCode(...bufferArray);
    this.data = JSON.parse(jsonString);
  }

  toString() {
    return JSON.stringify(this.data);
  }
}
