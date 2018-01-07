import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';

const DEFAULT_PROBLEM: Problem = Object.freeze({
  id: 0,
  name: '',
  desc: '',
  difficulty: 'easy'
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  // shallow copy, copy DEFAULT_PROBLEM
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addProblem() {
    // this.dataService.addProblem(this.newProblem);
    // homework: error handle
    this.dataService.addProblem(this.newProblem)
    // .then((err) => {
    //   console.log('Problem exist!~');
    // })
    ;
    // redefine default problem
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }
}
