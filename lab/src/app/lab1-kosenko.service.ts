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

  getHello(): string {
    const a = 45;
    const b = -75;
    return "Lab 3 result: " + Lab1KosenkoService.getBiggerNumber(a, b).toString();
  }
}

enum Role{
  Admin,
  User
}
