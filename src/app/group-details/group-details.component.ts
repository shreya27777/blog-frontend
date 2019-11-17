import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {

  private id;
  members: any;
  private group;
  private subscribers;
  private isAMember;
  private arr;
  private isAnOwner;

  constructor(private service: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.service.getFollower().subscribe((data) => {
      this.subscribers = data;
    });
    this.service.getMembers(this.id).subscribe((data) => {
      this.members = data;
    });
    this.service.groupById(this.id).subscribe((data) => {
      this.group = data;
    });
    this.service.isOwner(this.id).subscribe((data) => {
      this.isAnOwner = data;
    });
  }

  navigate(id: any) {
    this.router.navigate(['profile', id]);
  }

  remove(memberId: any) {
    if (this.isAnOwner) {
      if (confirm('exiting the group will delete the group')) {
        this.delete();
      }
    } else {
      this.service.remove(this.id, memberId).subscribe((data) => {
        this.members = data;
      });
    }
  }

  add(memberId: any) {
    console.log(memberId);
    this.service.isMember(this.id, memberId).subscribe((data) => {
      if (data === true) {
        alert('Member already in group');
      } else {
        this.service.add(this.id, memberId).subscribe((data1) => {
          this.members = data1;
        });

      }
    });
  }

  delete() {
    this.service.deleteGroup(this.id).subscribe((data) => {
      this.router.navigate(['groups']);
    });
  }
  postFollower(id) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/allPostOfUser/' + id, '_blank');
    });
  }
}
