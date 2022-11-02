import { SearchHardwareComponent } from './components/pages/search-hardware/search-hardware.component';
import { NewHardwareComponent } from './components/pages/new-hardware/new-hardware.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newHardware', component: NewHardwareComponent },
  {path: 'searchHardware', component: SearchHardwareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
