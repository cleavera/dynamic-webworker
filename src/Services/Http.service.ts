import {$WebWorker} from './WebWorker.service';
import {IHttp} from '../Interfaces/IHttp.interface'
import {IHttpResponse} from '../Interfaces/IHttpResponse.interface'

export class Http {
  static getHttpWorker(): IHttp {
    if (!window.$AnthonyCleaver) {
      window.$AnthonyCleaver = {};
    }

    if (!window.$AnthonyCleaver.PresentationGenerator) {
      window.$AnthonyCleaver.PresentationGenerator = {};
    }

    if (!window.$AnthonyCleaver.PresentationGenerator.HttpWebWorker) {
      window.$AnthonyCleaver.PresentationGenerator.HttpWebWorker = new $WebWorker($$Http);
    }

    return window.$AnthonyCleaver.PresentationGenerator.HttpWebWorker;
  }
}

class $$Http {
  static _parseHeaders(headers: Headers): any {
    let out = {},
        headerEntries = headers.entries(),
        header = headerEntries.next();

    while(!header.done) {
      out[header.value[0]] = header.value[1];
      header = headerEntries.next();
    }

    return out;
  }

  static _parseResponse(response: Response): Promise<IHttpResponse> {
    return response.json().then(body => {
      return { status: response.status, body: body, headers: this._parseHeaders(response.headers) };
    });
  }

  static getJSON(url): Promise<IHttpResponse> {
    return fetch(new Request(url)).then(response => this._parseResponse(response));
  }

  static options(url): Promise<IHttpResponse> {
    return fetch(new Request(url), { method: 'OPTIONS' }).then(response => this._parseResponse(response));
  }

  static remove(url): Promise<IHttpResponse> {
    return fetch(new Request(url), { method: 'DELETE' }).then(response => this._parseResponse(response));
  }

  static post(url, body): Promise<IHttpResponse> {
    return fetch(new Request(url), { method: 'POST', body: body }).then(response => this._parseResponse(response));
  }

  static put(url, body): Promise<IHttpResponse> {
    return fetch(new Request(url), { method: 'PUT', body: body }).then(response => this._parseResponse(response));
  }
}
