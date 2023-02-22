export default class Exercise1Service {
  async getMessage(name, age) {
    name = `hello ${name}`;
    return { name, age };
  }
}
