import { Component } from '@angular/core';
import {Lab1KosenkoService} from "./lab1-kosenko.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';
  constructor(private service: Lab1KosenkoService) { }

  public getNumber() {
    return this.service.getNumbers();
  }

  public getHello(){
    return this.service.getHello();
  }

  public getArray() {
    return this.service.getArrays();
  }

  public getEnum() {
    return this.service.getEnums();
  }

  public getMultiTypeArray() {
    return this.service.getMultiTypeArray();
  }

  public getMultiTypeValue() {
    return this.service.getMultiTypeValue();
  }
}
