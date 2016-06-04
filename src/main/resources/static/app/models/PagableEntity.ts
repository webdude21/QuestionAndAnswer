import {IPage} from './Page';

export class PagableEntity<T> {
    constructor(public page: IPage, public entity: T[]) { }
}