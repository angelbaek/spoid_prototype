import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { GraphComponent } from './graph/graph.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'graph', component: GraphComponent }
];