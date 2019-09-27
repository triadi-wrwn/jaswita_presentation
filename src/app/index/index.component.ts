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
  data = {
    gj: {
      title: 'Graha Jaswita',
      address: 'Jl. Lengkong Besar No. 101-103 Kota Bandung',
      img1: 'Picture3.jpg',
      img2: 'Picture4.jpg',
      inv: 'Rp 19,983,132,275.00',
      share: '100%',
      irr: '18,5%',
      der: '30%',
      npv: 'Rp 8,594,608,820.00',
      pi: '1,43',
      pp: '5,7 Tahun'
    },
    jtc: {
      title: 'Jaswita Tourism Center',
      address: 'Jl. Somawinata Pasir Kaliki Kota Bandung',
      img1: 'Picture5.jpg',
      img2: 'Picture6.jpg',
      inv: 'Rp 1,500,000,000.00',
      share: '100%',
      irr: '25.16%',
      der: '0%',
      npv: 'Rp 16,719,464,217.00',
      pi: '12.146',
      pp: '2.7 Tahun'
    },
    crsp: {
      title: 'Café & Resto San Pedo',
      address: 'Jl. Ambon No. 18 Kota Bandung',
      img1: 'Picture7.jpg',
      img2: 'Picture8.jpg',
      inv: 'Rp 4,305,071,000.00',
      share: '100%',
      irr: '28.09%',
      der: '0%',
      npv: 'Rp 7,129,083,000.00',
      pi: '2.259',
      pp: '5.0 Tahun'
    },
    gurilaps: {
      title: 'Gurilaps',
      address: '',
      img1: 'Picture9.jpg',
      img2: 'Picture10.jpg',
      inv: 'Rp 6,650,000,000.00',
      share: '100%',
      irr: '59.06%',
      der: '0%',
      npv: 'Rp 211,605,504,412.00',
      pi: '32.08',
      pp: '5.4 Tahun'
    },
    hgp: {
      title: 'Hotel Grand Preanger',
      address: 'Jl. Asia Afrika No. 81 Kota Bandung',
      img1: 'Picture11.jpg',
      img2: 'Picture12.jpg',
      inv: 'Rp 40,500,000,000.00',
      share: '70%',
      irr: '29.18%',
      der: '0%',
      npv: 'Rp 49,816,339,663.00',
      pi: '2.330',
      pp: '5.4 Tahun'
    }
  };
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

  openDialog(dataContent) {
    const dialogRef = this.modal.open(ModalComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100%',
      data: {
        content: dataContent
      }
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
