import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lab1KosenkoService {
  getNumbers(): number {
    return -1 * 5;
  }
  getArrays(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  getEnums(): Role {
    return Role.Admin;
  }
  getMultiTypeArray(): (string|number)[] {
    return [1, "Hello"];
  }

  getMultiTypeValue(): string|number {
    return 5;
  }

  // Lab3
  private static getBiggerNumber(a: number, b: number): number {
    return (a > b) ? a : b;
  }

  getHello(): Person {
    const person = new Person("Ann", "Doroshenko", "+380688455813", new Date("2003-05-21"), "Ukraine");
    return person;
  }
}

enum Role{
  Admin,
  User
}

// Lab4
export class Person {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthday: Date;
  birthCountry: string;

  constructor(firstName: string, lastName: string, phoneNumber: string, birthday: Date, birthCountry: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.birthday = birthday;
    this.birthCountry = birthCountry;
  }
}
