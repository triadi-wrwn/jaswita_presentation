import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  config: any;
  fullpageApi: any;
  constructor(
    public modal: MatDialog,
    private overlay: Overlay
    ) {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      // fullpage callbacks
      afterResize: () => {
        console.log('After resize');
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  openDialog() {
    const dialogRef = this.modal.open(ModalComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100%'
    });
    this.fullpageApi.setAutoScrolling(false, 'down, up');
    this.fullpageApi.setKeyboardScrolling(false, 'down, up');

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.fullpageApi.setAutoScrolling(true, 'down, up');
      this.fullpageApi.setKeyboardScrolling(true, 'down, up');
    });
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

  ngOnInit() {
  }

}
