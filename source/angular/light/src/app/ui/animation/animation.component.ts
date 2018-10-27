import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function () {
      initAnimation();
    });

    function initAnimation() {

      $('.js-animations').on('change', function () {
        var animation = $(this).val();
        $('.js-animating-object').animateCss(animation);
      });
      initBasicSelect();

      $.fn.extend({
        animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
          });
        }
      });
    }
    function initBasicSelect() {
      /* basic select start*/
      $('select').formSelect();
      $('#sel').formSelect();
      /* basic select end*/
    }

  }

}
