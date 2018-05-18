import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-komponenta',
  templateUrl: './nova-komponenta.component.html',
  styleUrls: ['./nova-komponenta.component.css']
})
export class NovaKomponentaComponent implements OnInit {
  nekiTekst:string;
  meseci:string[];
  isavailable:boolean;
   
  constructor() { }

  ngOnInit() {
    this.nekiTekst="tekst napisan malim slovima";

    this.meseci=["januar", "februar","mart","april","maj","jun","jul"];

    this.isavailable = true;  

  }

  myClickFunction(event){
     alert("juhu"); 
  }

}
