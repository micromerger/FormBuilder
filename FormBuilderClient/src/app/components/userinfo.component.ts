import { Component } from '@angular/core';
import {  Userinfo , FireLoopRef } from 'app/shared/sdk/models';

import { RealTime } from 'app/shared/sdk/services';
@Component({
  templateUrl: 'userinfo.component.html'
})
export class UserInfoComponent {
public alerts: any = [];
public successModal;
public dangerModal;
private user : Userinfo = new Userinfo();
private users : Userinfo[] = new Array <Userinfo>();
private userRef : FireLoopRef<Userinfo>;
    constructor(private rt: RealTime ) {
      this.rt.onReady().subscribe(() => {
      this.userRef = this.rt.FireLoop.ref<Userinfo>(Userinfo);
      this.userRef.on('change',{order: 'id ASC'}).subscribe((users: Userinfo[]) => this.users = users);
      });
  }
  ngOnInit() {
  }

title="App Works"
add(): void {
 this.userRef.create(this.user).subscribe(() => this.user = new Userinfo());
 }
 update(user: Userinfo): void {
 this.userRef.upsert(user).subscribe();
 }
 remove(user: Userinfo): void {
 this.userRef.remove(user).subscribe();
}
 public addAlert(): void {
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }
}
