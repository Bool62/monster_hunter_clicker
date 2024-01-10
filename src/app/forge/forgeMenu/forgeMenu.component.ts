import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-forge-menu',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './forgeMenu.component.html',
    styleUrl: './forgeMenu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgeMenuComponent implements OnInit {

    ngOnInit(): void { }

}
