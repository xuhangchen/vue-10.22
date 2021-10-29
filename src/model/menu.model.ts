export class MenuItem {
    constructor(public title: string, public id: string, public subMenu: Array<SubMenuItem>) {}
}
export class SubMenuItem {
    constructor(public id: string, public title: string, public url?: string) {}
}
