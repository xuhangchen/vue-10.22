export class MenuItem {
    constructor(
        public content: string,
        public id: string,
        public url: string,
        public type: MenuType,
        public icon?: string,
        public subMenuGroup: Array<MenuItem> = [],
        public subMenuList: Array<MenuItem> = []
    ) {}
}

export enum MenuType {
    ROOT = 'ROOT',
    ITEM = 'ITEM',
    MENU_GROUP = 'MENU_GROUP',
    MENU_LIST = 'MENU_LIST',
}
export class SubMenuItem {
    constructor(public id: string, public title: string, public url?: string) {}
}

export class Bin {
    private _id!: number;

    constructor(public name: string) {}

    set id(num: number) {
        this._id = num;
    }

    get id(): number {
        return this._id;
    }
}
