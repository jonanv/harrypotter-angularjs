import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HousesComponent } from './components/houses/houses.component';
import { WizardsComponent } from './components/wizards/wizards.component';
import { SpellsComponent } from './components/spells/spells.component';
import { HouseComponent } from './components/house/house.component';


const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: 'wizards', component: WizardsComponent },
  { path: 'wizard/:id', component:  },
  { path: 'spells', component: SpellsComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'houses' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
