import {Injectable} from 'angular2/core';

@Injectable()
export class MyFormService {
  public name: string = '';
  public phone: number;
  public comment: string = '';
  
  constructor() {
  }
}