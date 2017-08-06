import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  user: string;

  constructor(private auth: AuthService,
              private db: DatabaseService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  onStudentSearch(f: NgForm) {
    this.db.searchStudent(f.value.student);
    this.router.navigate(['/search']);
  }

}
