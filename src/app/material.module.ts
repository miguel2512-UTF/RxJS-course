import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatTreeModule
    ]
})

export class MaterialModule {}