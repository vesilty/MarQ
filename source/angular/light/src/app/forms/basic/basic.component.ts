import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.datetimepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY - HH:mm',
      clearButton: true,
      weekStart: 1
    });

    $('.datepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
      format: 'HH:mm',
      clearButton: true,
      date: false
    });
  }

}
