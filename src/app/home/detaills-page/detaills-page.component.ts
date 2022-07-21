import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detaills-page',
  templateUrl: './detaills-page.component.html',
  styleUrls: ['./detaills-page.component.css']
})
export class DetaillsPageComponent implements OnInit {
  item: any;

  constructor(private _router: Router, private _Arouter: ActivatedRoute) { 
    this.item = {};
  }

  ngOnInit(): void {
    this._Arouter.params.subscribe((params) => {
      this.item = params['item'];
      console.log(this.item);
    });
  }

}
