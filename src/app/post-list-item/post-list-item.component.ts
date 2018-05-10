import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() titre: string;
  @Input() contenu: string;
  @Input() date: Date;
  love = 0;
  dontLove = 0;

  constructor() { }

  ngOnInit() {
  }

  onLove(){
    this.love++;
  }
  ongetLove(){
    return this.love;
  }

  onDontLove(){
    this.dontLove++;
  }
  ongetDontLove(){
    return this.dontLove;
  }
}
