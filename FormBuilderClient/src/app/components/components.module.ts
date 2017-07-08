import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserInfoComponent } from './userinfo.component';

// Forms Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//alert
import { AlertModule } from 'ngx-bootstrap';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
//sdk
import { SDKBrowserModule} from 'app/shared/sdk';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SDKBrowserModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule,
    FormsModule
  ],
  declarations: [
    UserInfoComponent
  ]
})
export class ComponentsModule { }
