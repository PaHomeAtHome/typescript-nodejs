import { IPerson } from "./PersonType";

const storeData: IPerson[] = [];

export default class PersonService {
  async setPerson(data: IPerson): Promise<true> {
    storeData.push(data);

    return true;
  }

  async getAll(): Promise<IPerson[]> {
    return storeData;
  }

  async getOne(id: number): Promise<IPerson | {}> {
    const result = storeData.find((item) => item.id === id);
    return result || {};
  }
}
