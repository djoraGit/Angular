import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MyserviceService } from '../../services/myservice.service';
import { HttpservisService } from '../../services/httpservis.service';

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

  newcomponentproperty;

  constructor(private dataService:DataService, private myservice: MyserviceService, private httpservisService: HttpservisService) {
    console.log('Constructor log ...');
    
    this.newcomponentproperty = this.myservice.serviceproperty;
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

    this.httpservisService.getPosts2();
   
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