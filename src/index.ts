
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

    static keys<T>(enumObj:T):Array<keyof T> {
        return Object.keys(enumObj) as Array<keyof T>;
    }
}
