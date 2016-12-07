import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private _name: string;
  private _age: number;
  
  constructor() {
    this._name = 'John Connor';
    this._age = 31;
  }
  
  get name() {
    return this._name;
  }
  
  set name(newVal) {
    console.log('Set name = ' + newVal);
    this._name = newVal;
  }
  
  get age() {
    return this._age;
  }
  
  set age(newVal) {
    console.log('Set age = ' + newVal);
    this._age = newVal;
  }
}