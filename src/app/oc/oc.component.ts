import { Component, OnInit } from '@angular/core';
import { OcService } from '../services/oc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oc',
  templateUrl: './oc.component.html',
  styleUrls: ['./oc.component.css']
})
export class OcComponent implements OnInit {

  list = [];
  displayedColumns: string[] = ['id', 'code', 'comment', 'detail'];


  constructor(
    private router: Router,
    private ocService: OcService,
  ) { }

  ngOnInit() {

    this.ocService.documents().subscribe(
      (data: resp) => {
        if (data.status) {
          this.list = data.data
            .filter((r: oc) => r.document_type.id === 1)
            .map((r: oc) => {
              return {
                id: r.id,
                code: r.code,
                comment: r.comment.substr(0, 10) + '...',
              }
            }).
            sort((a, b) => a.id - b.id)
        }
      }, error => {
        this.router.navigate(['login'])
      });

  }
  // onDetail(id: string): void {
  //   console.log('detail', id)
  //   this.ocService.detail(id).subscribe(
  //     resp => {
  //       console.log('detail resp', resp)
  //     }
  //   )
  // }
}

export interface resp {
  status: boolean,
  data: Array<object>
}

export interface oc {
  id: number,
  code: string,
  comment: string,
  created_at: string,
  document_type: {
    id: number,
    name: string
  }
}
