import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  private groups;
  name: any;

  constructor(private service: HttpService, private router: Router) { }

  ngOnInit() {
    this.service.getAllGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  create() {
    this.service.createGroup({
      name: this.name
    }).subscribe((data) => {
      console.log(data);
      this.groups = data;
    });
  }

  delete(id: any) {
    this.service.deleteGroup(id).subscribe((data) => {
      this.groups = data;
    });
  }

  navigate(id: any) {
    console.log(id);
    this.router.navigate(['group-details', id]);
  }
}
