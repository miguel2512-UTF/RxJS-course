import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
        <div class="footer">
            <p>miguel2512-UTF | Copyright &copy; 2023</p>
            <p>RxJS Oficial Documentation: <a href="https://rxjs.dev/guide/overview" target="_blank">https://rxjs.dev/guide/overview</a></p>
        </div>
    `,
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {}