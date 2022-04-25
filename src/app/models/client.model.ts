import { PersonModel } from "./person.model";

export interface ClientModel {
    id: string,
    personPresenter: PersonModel,
    password: string,
    status: boolean
  }