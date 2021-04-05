import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes),
        LayoutModule,
        BaseCardModule
    ],
    providers: [],
})
export class MainModule { }
