import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  constructor(){
  }

  private _pet: []
  private _categories: []

  async getInfoPets() {
    const outputPet = await axios.get('https://bsl1.herokuapp.com/pet')
    this._pet = outputPet.data

    const outpurCategory = await axios.get('https://bsl1.herokuapp.com/pet/categories')
    this._categories = outpurCategory.data

    return [ this._pet, this._categories ]

  }

}
