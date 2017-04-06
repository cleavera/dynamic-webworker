export class $Blob {
  private _url: string;

  blob: Blob;

  constructor(blob: Blob) {
    this.blob = blob;
  }

  encode() {
    let reader = new FileReader();

    reader.readAsDataURL(this.blob);

    return new Promise(function(resolve) {
      reader.onloadend = function() {
        resolve(reader.result);
      };
    });
  }

  getURL() {
    if (this._url) {
      return this._url;
    }

    this._url = URL.createObjectURL(this.blob);

    return this._url;
  }

  remove() {
    return URL.revokeObjectURL(this.getURL());
  }

  static fromString(str: string) {
    return new $Blob(new Blob([str]));
  }

  static fromBlob(blob: Blob) {
    return new $Blob(blob);
  }
}
