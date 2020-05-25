import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @ViewChild('InputServerContent',{static:true})InputServerContent:ElementRef;

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bpCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  onServerCreated(inputServerName:HTMLInputElement){
    this.serverCreated.emit({serverName:inputServerName.value, serverContent: this.InputServerContent.nativeElement.value});
  }
  onbpCreated(inputServerName:HTMLInputElement){
    this.bpCreated.emit({serverName:inputServerName.value, serverContent: this.InputServerContent.nativeElement.value});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
