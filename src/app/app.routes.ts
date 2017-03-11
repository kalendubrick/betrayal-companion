import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'betrayal-companion', component: HomeComponent },
    { path: 'play-game', component: GameComponent }
]
