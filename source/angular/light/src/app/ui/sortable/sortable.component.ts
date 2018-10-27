import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.css']
})
export class SortableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      (<any>$('.dd')).nestable();

    });
  }

}
