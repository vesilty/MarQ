import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const CKEDITOR: any;
declare const tinymce: any;


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    CKEDITOR.replace('ckeditor');
    CKEDITOR.config.height = 300;

    //TinyMCE
    tinymce.init({
      selector: 'textarea#tinymce1',
      theme: "modern",
      height: 300,
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
      ],

    });
  }

}
