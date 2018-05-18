import { Component } from '@angular/core';
import { MyserviceService } from './services/myservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  danasnjiDan; 
  componentproperty;
  constructor(private myservice: MyserviceService){
     this.danasnjiDan=myservice.showTodayDate();

     console.log(this.myservice.serviceproperty);
     this.myservice.serviceproperty = "component created"; // value is changed.
     this.componentproperty = this.myservice.serviceproperty;
  
   }

   onClickSubmit(data) {
    alert("Entered Email id : " +  data.emailid);
 }
}
