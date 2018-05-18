import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string='zika obretkovic';
  age:number;
  address: Address;
  hobbies:string[];
  posts:Posts[];

  constructor(private dataService:DataService) {
    console.log('Constructor log ...');
   }

  ngOnInit() {
    console.log('ngOnInit log ....');
    this.name= 'Srdjan Djoric';
    this.age=30;
    this.address = {
      street:'Zrmanjska 12',
      city:'Beograd',
      state:'SRB'
    }
    this.hobbies=['muzika', 'crtanje', 'sitanje'];

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts=posts;
    });
   
  }

  onClick() {
    console.log('kliknuo sam');
    this.name='Biljana Djoric';
    this.hobbies.push('voznja' );
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i =0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Posts {
  id: number,
  title:string,
  body:string,
  userid:number
}