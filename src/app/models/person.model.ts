export interface PersonModel {
    id: string;
    name: string;
    gender: GenderEnum,
    age: number,
    identification: string,
    address: string,
    phone: string
}

export enum GenderEnum {
    Masculino = 'MASCULINO',
    Femenino = 'FEMENINO'
}