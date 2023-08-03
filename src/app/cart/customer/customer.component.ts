import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user"
import {jsPDF} from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Router } from '@angular/router';

import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

   user=new User();
     name_error='';
     email_error='';
     last_error='';

  constructor(private LocalStorageService:LocalStorageService,private router:Router) { }
 ;
  AllCourse:any[]=[];
  ngOnInit(): void {

    this.AllCourse=this.LocalStorageService.LoadfromLocalStorage("courses");
  }

  ConfirmAchat(){
       let valid=this.validate("name") && this.validate("email") && this.validate("last");
       if (valid){
        this.passCommande();
       }
  }

  passCommande(){
   const doc = new jsPDF();
    this.AllCourse.forEach((v)=>{
            autoTable(doc, {
              theme:'striped',
              bodyStyles:{fontStyle:'bold',halign:'center'},
              margin: { top: 40 },
              head: [['Name Product','Prix Unit', 'Quantity', 'Prix Total']],
              body: [
                [v.name,v.prix,v.quantity,v.quantity*v.prix],
              ],
            })
      });
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        doc.text('Nous apprecions votre clinetele',110,doc.internal.pageSize.height - 30,{'align':'center'});
        doc.text('si vous-avez des questions sur cette facture,n hesitez pas a nous contacter' ,110, doc.internal.pageSize.height - 20,{'align':'center'});
        doc.save(`${this.user.name}.pdf`);
        this.LocalStorageService.clearLOcalStorage();
        this.router.navigate(['course'])
  }

   validateEmail(email:string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validate(input:String){
    if (input == "name") {
      if (this.user.name == '') {
        this.name_error = "name required";
      } else if (this.user.name.length < 5) {
        this.name_error = "name must be greater than 5 characters";
      } else {
        this.name_error = '';
        return true;
      }
    } else if (input == "last") {
      if (this.user.LastName == "") {
        this.last_error = "Last name required";
      } else if (this.user.LastName.length < 5) {
        this.last_error = "Last name must be greater than 5 characters";
      } else {
        this.last_error = "";
        return true;
      }
    }
    else if (input == "email") {
      if (this.user.email == "") {
        this.email_error = "Email required";
      } else if (!this.validateEmail(this.user.email)) {
        this.email_error = "Email is Invalid";
      } else {
        this.email_error = '';
        return true;
      }
    }
    return false;
  }

}
