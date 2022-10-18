import { Component, OnInit } from '@angular/core';
import { ServicioapiService } from '../servicioapi.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage {
  cama
  constructor(private api: ServicioapiService) {
    this.api.getPosts();
    this.api.getPosts().subscribe((res) =>{
    this.cama=res;
    console.log(res);
  },(error) => {
    console.log(error);
  });
  }
 
}
