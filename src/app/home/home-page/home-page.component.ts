import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  noticeData?:[];

  constructor(
    private readonly _noticeService: NoticiaService,
    private readonly  _router: Router) { }

  ngOnInit(): void {
    this.getNoticias();
    console.log("Init");
  }

  getNoticias() {
    this._noticeService.getNoticias().subscribe(         
        res => {
          this.noticeData = res.articles;
          console.log(this.noticeData);
        });
  }

}
