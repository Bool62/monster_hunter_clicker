import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-inventory-menu',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './inventoryMenu.component.html',
    styleUrl: './inventoryMenu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryMenuComponent implements OnInit {

    ngOnInit(): void { }

}
