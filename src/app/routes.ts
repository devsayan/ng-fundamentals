import {Routes} from '@angular/router'
import {Routable1Component} from './routable1/routable1.component'
import {Routable2Component} from './routable2/routable2.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {RouteguardService} from './routeguard.service'
export const routes : Routes = [
    {path : "routable1", component : Routable1Component},
    {path : "routable1/:id", component : Routable2Component, canActivate :[RouteguardService]},
    {path : "404", component : PageNotFoundComponent},
    {path : "", redirectTo : '/routable1', pathMatch : "full"} 
]