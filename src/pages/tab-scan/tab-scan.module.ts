import { NgModule } from '@angular/core'
import { IonicPageModule, Platform } from 'ionic-angular'
import { TabScanPage } from './tab-scan'
import { ComponentsModule } from '../../components/components.module'
import { ScannerProvider } from '../../providers/scanner/scanner'
import { ZXingScannerModule } from '@zxing/ngx-scanner'

@NgModule({
  declarations: [TabScanPage],
  imports: [ComponentsModule, ZXingScannerModule, IonicPageModule.forChild(TabScanPage)],
  providers: [ScannerProvider, Platform],
  entryComponents: [TabScanPage]
})
export class TabScanPageModule {}
