export interface IQueryGeneric<Key, Model> {
    getAll(filter?: Key): Promise<Model[]>;
    getByKey(filter: Key): Promise<Model[]>;
}