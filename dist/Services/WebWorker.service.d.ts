export declare class DynamicWebWorker<T> {
    private _promise;
    private _blob;
    private _worker;
    constructor(service: T);
    $terminate(): void;
    private _callMethod(methodName, ...params);
    private _spawnWorker(functions);
}
