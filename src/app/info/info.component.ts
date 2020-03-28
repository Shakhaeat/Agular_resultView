import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // onSubmit(degree){
  // 	console.log(this.degree)
  // }
  onClickSubmit(formData: any) {
      // alert('Your Email is : ' + formData);
      this.router.navigate(['/get',  formData.degree, formData.year,formData.board, formData.roll])
      console.log(formData)
     // console.log(formData)
   }


}
