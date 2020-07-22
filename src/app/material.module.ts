import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule
    ]
})
export class MaterialModule { }
