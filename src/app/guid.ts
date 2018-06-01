export class Guid {
    private value: string;

    constructor(value: string | Guid = null) {
        this.value = value.toString() || Guid.empty().toString();
    }

    static newGuid() {
        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }

    static empty(): Guid {
        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
    }

    public toString(): string {
        return this.value;
    }
}
