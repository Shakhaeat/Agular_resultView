import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  	showSpinner = true;
    public degree : any;
    public year : any;
    public board : any;
    public roll : any;
    studentData: any;
    errorMessage: string = "Loading......";
    
  constructor(
    private route: ActivatedRoute,
    private stuentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.degree = this.route.snapshot.paramMap.get('degree');  
    this.year = this.route.snapshot.paramMap.get('year');  
    this.board = this.route.snapshot.paramMap.get('board');  
  	this.roll = this.route.snapshot.paramMap.get('roll');  
    this.loadGetResult(this.degree, this.year, this.board, this.roll);
  }

  loadGetResult(degree, year, board, roll){
    this.stuentService.getResult(degree, year, board, roll).subscribe(student => {
      this.studentData = student;
      this.showSpinner = false;
        // setTimeout(() => {
        // 	this.showSpinner = false;
        // }, 40);
      console.log(this.studentData);
    }, (err)=>{
        this.errorMessage = "Result of your specified criteria is not found. Please check and try again.."
    });

    setTimeout(() => {
      this.showSpinner = false;
    }, 400);

    
  }

  // loadData(){
  //   this.showSpinner = true;
  //   setTimeout(() => {
  //   	this.showSpinner = false;
  //   }, 470);
  // }

}
