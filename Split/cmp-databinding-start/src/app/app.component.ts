import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",content:"This is a test server", name:"Test server"}];
  
onServerAdded(serverElement:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverElement.serverName,
      content: serverElement.serverContent
    });
  }

  onBlueprintAdded(serverElement:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverElement.serverName,
      content: serverElement.serverContent
    });
  }
  
}















