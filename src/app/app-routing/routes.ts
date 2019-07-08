import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

export const routes: Routes = [
    { path: 'menu',     component: MenuComponent },
    { path: 'detail/:id',     component: CharacterDetailComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];