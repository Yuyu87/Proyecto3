import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {BtprofileComponent} from './btprofile/btprofile.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {ListbtComponent} from './listbt/listbt.component';
import {IndexComponent} from './index/index.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';
import {EditbtprofileComponent} from './editbtprofile/editbtprofile.component';
import {MybtprofileComponent} from './mybtprofile/mybtprofile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'userprofile',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'btprofile',  component: BtprofileComponent,  },
    { path: 'editprofile',  component: EditprofileComponent,  },
    { path: 'listbt',  component: ListbtComponent,  },
    { path: 'editbtprofile',  component: EditbtprofileComponent,  },
    { path: 'mybtprofile',  component: MybtprofileComponent,  },
    { path: '**', redirectTo: '' }
];
