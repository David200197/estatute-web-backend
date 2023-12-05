export class NameControl {
  private readonly name: string;
  constructor(private readonly dirname: string) {
    this.name = dirname.split('/').at(-1);
  }

  // return a camelCase
  public get camelCase() {
    return this.name.charAt(0).toLowerCase() + this.name.slice(1);
  }

  // return a PascalCase
  public get pascalCase() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  // return a UPPER_CASE
  public get upperCase() {
    return this.name
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
      .toUpperCase();
  }

  // return a kebab-case
  public get kebabCase() {
    return this.camelCase.replace(
      /[A-Z]+(?![a-z])|[A-Z]/g,
      ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
    );
  }

  public get urlPaths() {
    const dirnameSpliters = this.dirname.split('/');
    dirnameSpliters[dirnameSpliters.length - 1] = this.kebabCase;
    return dirnameSpliters;
  }
}
