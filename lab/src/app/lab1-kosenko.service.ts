import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lab1KosenkoService {
  getNumbers(): number {
    return -1 * 5;
  }
  getHello(): string {
    return "Hello";
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
}

enum Role{
  Admin,
  User
}
