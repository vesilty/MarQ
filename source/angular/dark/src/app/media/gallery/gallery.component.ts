import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#aniimated-thumbnials').lightGallery({
      thumbnail: true,
      selector: 'a'
  });
  }

}
