import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewProjectService {

  public editData = {
    id: null,
    tache1: null,
    tache2: null,
    tache3: null,
    tache4: null,
    technique: null,
    performance: null,
    ergonomie: null,
    fonctionMetier: null,
    intuitivite: null,
    modif: null,
  };

  public id;

  constructor() { }

  storeEdit(data){
    this.editData = data;
  }
  
  getEdit(){
    return this.editData;
  }

  storeId(data){
    this.id = data;
  }

  getId(){
    return this.id
  }
}
