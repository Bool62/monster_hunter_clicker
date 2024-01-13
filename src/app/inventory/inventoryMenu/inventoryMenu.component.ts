import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { ClickerGameState } from "../../store/clickerGame.state";
import { Observable, of } from "rxjs";
import { ItemInventory } from "../../../lib/model/item.model";

@Component({
  selector: "app-inventory-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./inventoryMenu.component.html",
  styleUrl: "./inventoryMenu.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryMenuComponent implements OnInit {
  @Select(ClickerGameState.inventoryItemArray)
  inventoryItemArray$!: Observable<ItemInventory[]>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}
}
