import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'header.component.html'
})
export class HeaderComponent{
    title:string = "I'm header";
    @Output() featureEvent = new EventEmitter<string>();

    onFeatureClick(feature:string){
        this.featureEvent.emit(feature);

    }

}