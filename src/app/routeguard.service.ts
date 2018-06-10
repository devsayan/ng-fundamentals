import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {SuperheroService} from './superhero.service'
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  constructor(private router : Router, private superHeroService : SuperheroService) { }
  canActivate (route : ActivatedRouteSnapshot){
    var param = route.params['id'];
    var found = true;
    var superHeroes = this.superHeroService.getEmployees();
    for (var i =0; i < superHeroes.length; i++){
      if(!((param === "16306") || (param === "16307"))){
        this.router.navigate(['/404']);
        found = false;
        break;
      }
    }    
    return found;
  }

}
