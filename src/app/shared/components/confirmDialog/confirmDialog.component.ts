import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: "./confirmDialog.component.html",
  styleUrl: "./confirmDialog.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}
}
