import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    sidebarState: boolean = false

    toggleSidebar(){
        if (this.sidebarState) {
            this.sidebarState = false
        }else{
            this.sidebarState = true
        }
    }
}