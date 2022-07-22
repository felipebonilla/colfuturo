import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [DashboardComponent, FooterComponent, HeaderComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
