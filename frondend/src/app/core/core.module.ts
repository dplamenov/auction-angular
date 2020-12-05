import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {SharedModule} from '../shared/shared.module';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FormsModule} from '@angular/forms';
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';


@NgModule({
  declarations: [NotFoundComponent, FooterComponent, HeaderComponent, ContactUsComponent, TermsOfServiceComponent, UserAgreementComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    SharedModule,
    FormsModule
  ],
  exports: [NotFoundComponent, FooterComponent, HeaderComponent, ContactUsComponent, TermsOfServiceComponent]
})
export class CoreModule {
}
