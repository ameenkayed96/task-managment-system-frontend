import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Output() paginationData = new EventEmitter<{ page: number }>();
  @Input() page: any;
  @Input() length: number = 2;
  @Input() pageOffset: number = 0;


  constructor() {}
  ngOnInit() {
  }

  getFirstPage() {
    if(this.page != 1){
      this.paginationData.emit({ page: 1 });
    }
  }

  getNextPage() {
    if(this.pageOffset > this.page){
      this.paginationData.emit({ page: this.page + 1 });
    }
  }

  getPreviousPage() {
    if(this.page > 1){
      this.paginationData.emit({ page: this.page - 1 });
    }
  }

  getLastPage() {
    if(this.page != this.pageOffset){
      this.paginationData.emit({ page: this.pageOffset });
    }
  }

}
