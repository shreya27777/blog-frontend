import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private search;



  constructor(private router: Router, private appService: AppService,
              private authService: AuthenticationService, private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (localStorage.getItem('search') === undefined) {
      this.search = undefined;
    } else {
      this.search = localStorage.getItem('search');
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.search = params.get('q');
    });
  }


  logout() {
    this.authService.signOut().subscribe(res => {
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      this.appService.isLoggedIn(false);
      localStorage.removeItem('auth');
      alert('Logout Successful');
      this.router.navigate(['/home']);
    });
  }

  startSearch() {
    this.router.navigate(['/search', this.search]);
  }
}
