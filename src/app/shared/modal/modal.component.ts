import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  address: string;
  img1: string;
  img2: string;
  inv: string;
  share: string;
  irr: string;
  der: string;
  npv: string;
  pi: string;
  pp: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
