import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

/**
 * Guarda para comprobar si el usuario esta logeado
 */
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    /**
     * Función canActivate que verifica si se puede rutear
     */
    canActivate() {
        const username = localStorage.getItem('username');
        if (username !== null) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
