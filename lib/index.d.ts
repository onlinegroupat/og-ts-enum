export declare class Enum {
    static fromArray<T extends string>(o: Array<T>): {
        [K in T]: K;
    };
    static fromObject<T extends {
        [_: string]: V;
    }, V extends string>(definition: T): T;
}
