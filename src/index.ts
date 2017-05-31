
export class Enum {

    static fromArray<T extends string>(o: Array<T>): {[K in T]: K} {
        return o.reduce((res, key) => {
            res[key] = key;
            return res;
        }, Object.create(null));
    }

    static fromObject<T extends { [_: string]: V }, V extends string>(definition: T): T {
        return definition;
    }
}
