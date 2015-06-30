import {IonicComponent, IonicView, Routable, NavController} from 'ionic/ionic';


@IonicComponent({
  selector: 'ion-view',
  route: {
    path: '/thirdpage'
  }
})
@IonicView({
  template: `
    <ion-navbar *navbar><ion-title>Third Page Header</ion-title></ion-navbar>
    <ion-content class="padding">
      <p>
        <button primary (click)="pop()">Pop (Go back to 2nd)</button>
      </p>
      <div class="yellow"><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f><f></f></div>
    </ion-content>
  `
})
export class ThirdPage {
  constructor(
    nav: NavController
  ) {
    this.nav = nav
  }

  pop() {
    this.nav.pop()
  }

  viewLoaded() {
    console.log('viewLoaded third page');
  }

  viewWillEnter() {
    console.log('viewWillEnter third page');
  }

  viewDidEnter() {
    console.log('viewDidEnter third page');
  }

  viewWillLeave() {
    console.log('viewWillLeave third page');
  }

  viewDidLeave() {
    console.log('viewDidLeave third page');
  }

  viewWillUnload() {
    console.log('viewWillUnload third page');
  }

  viewDidUnload() {
    console.log('viewDidUnload third page');
  }

}

new Routable(ThirdPage, {
  path: '/thirdpage'
});
