import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HousesComponent } from './components/houses/houses.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SpellsComponent } from './components/spells/spells.component';
import { HouseComponent } from './components/house/house.component';
import { CharacterComponent } from './components/character/character.component';


const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:house/:id', component: CharacterComponent },
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
