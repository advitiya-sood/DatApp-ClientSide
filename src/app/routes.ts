import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { MatchesComponent } from "./matches/matches.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthGuard } from "./_guards/auth.guard";


export const appRoutes :  Routes= [

  {path: '', component: HomeComponent },

  {path: '',
runGuardsAndResolvers:'always',
canActivate :[AuthGuard],
children:[
  {path: 'list', component: ListComponent },
  {path: 'matches', component: MatchesComponent,},
  {path: 'messages', component:MessagesComponent },
]},
  {path: '**', redirectTo: '', pathMatch: 'full' },



]
