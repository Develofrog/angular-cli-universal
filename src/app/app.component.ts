import { Component, OnInit } from '@angular/core';

import { TransferState } from './transfer-state/transfer-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private transferState: TransferState) {}

  ngOnInit(): void {
    this.transferState.set('cached', true);
  }
}
