import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-quest-menu',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './questMenu.component.html',
    styleUrl: './questMenu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestMenuComponent implements OnInit {

    ngOnInit(): void { }

}
