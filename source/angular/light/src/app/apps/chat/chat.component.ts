import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#chat_user').slimscroll({
      height: '590px',
      size: '5px'
    });

    $('#chat-conversation').slimscroll({
      height: '438px',
      size: '5px'
    });

  }

}
