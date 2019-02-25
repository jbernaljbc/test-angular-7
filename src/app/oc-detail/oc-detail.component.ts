import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { OcService } from '../services/oc.service';

@Component({
  selector: 'app-oc-detail',
  templateUrl: './oc-detail.component.html',
  styleUrls: ['./oc-detail.component.css']
})
export class OcDetailComponent implements OnInit {


  detail: detail

  constructor(
    private route: ActivatedRoute,
    private ocService: OcService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.ocService.detail(code).subscribe(
          (resp) => {
            console.log('resp', resp)
            this.detail = resp[0]
          }
        )
      }
    });
  }
}

export interface detail {
  id: string,
  user: string,
  date: string,
  document: [{
    id: string,
    document: {
      bidding_code: string,
      code: string,
      comment: string
    }
  }]
}
