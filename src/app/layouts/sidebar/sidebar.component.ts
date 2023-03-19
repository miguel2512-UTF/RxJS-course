import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    @Input() sidebar: boolean = false

    expandSidebarItem(event: Event){
        const element = event.currentTarget as HTMLBodyElement
        if (element.parentElement) {        
            element.parentElement.classList.toggle('active-item')
        }
    }
}