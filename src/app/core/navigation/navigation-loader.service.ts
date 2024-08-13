import { Injectable } from '@angular/core';
import { VexLayoutService } from '@vex/services/vex-layout.service';
import { NavigationItem, NavigationLink } from './navigation-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Roles } from 'src/app/models/roles';

@Injectable({
  providedIn: 'root'
})
export class NavigationLoaderService {
  private readonly _items: BehaviorSubject<NavigationItem[]> =
    new BehaviorSubject<NavigationItem[]>([]);

  get items$(): Observable<NavigationItem[]> {
    return this._items.asObservable();
  }

  constructor(
    private readonly layoutService: VexLayoutService,
    private localStorage: LocalStorageService,
  ) {
    this.loadNavigation();
  }

  loadNavigation(): void {
    const userRoles = new Roles(JSON.parse(this.localStorage.getData('dataRole') ?? 'null'));

    const navigationItems: NavigationItem[] = [
      {
        type: 'subheading',
        label: 'Tableau de bord',
        children: this.getNavigationLinks(userRoles.role_name)
      },
    ];

    this._items.next(navigationItems);
  }

  private getNavigationLinks(userRoles: string): NavigationLink[] {
    const links: NavigationLink[] = [];
    if ( userRoles.includes('ADMIN')) {
      links.push(
        {
          type: 'link',
          label: 'Sites',
          route: '/sites',
          icon: 'mat:home',
          routerLinkActiveOptions: { exact: true }
        },
        {
          type: 'link',
          label: 'Utilisateurs',
          route: '/users',
          icon: 'mat:person_add',
          routerLinkActiveOptions: { exact: true }
        },
        {
          type: 'link',
          label: 'Produits',
          route: '/products',
          icon: 'mat:view_list',
          routerLinkActiveOptions: { exact: true }
        },
        {
          type: 'link',
          label: 'Transactions',
          route: '/transactions',
          icon: 'mat:attach_money',
          routerLinkActiveOptions: { exact: true }
        },
        // {
        //   type: 'link',
        //   label: 'Ventes',
        //   route: '/sales',
        //   icon: 'font:fa-bacon',
        //   routerLinkActiveOptions: { exact: true }
        // },

      );
    }
    links.push(
      {
        type: 'link',
        label: 'Clients',
        route: '/clients',
         icon: 'mat:person',
        routerLinkActiveOptions: { exact: true }
      }
    );
    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('ADMIN')) {
      links.push(
        {
          type: 'link',
          label: 'Depenses',
          route: '/depenses',
           icon: 'mat:trending_up',
          routerLinkActiveOptions: { exact: true }
        }
      );
    }

    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('CAISSIERE') || userRoles.includes('SUPER_ADMIN')) {
      links.push(
        {
          type: 'link',
          label: 'Vente en cours',
          route: '/current-sale',
           icon: 'mat:shopping_basket',
          routerLinkActiveOptions: { exact: true }
        }
      );
    }

    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('SUPER_ADMIN')) {
      links.push(
        {
          type: 'link',
          label: 'Nouvelle vente',
          route: '/new-sale',
          icon: 'mat:add_shopping_cart',
          routerLinkActiveOptions: { exact: true }
        }
      );
    }
    if (userRoles.includes('SUPERVISEUR') || userRoles.includes('ADMIN'))
    {
      links.push(
        {
          type: 'link',
          label: 'Versements',
          route: '/versements',
          icon: 'mat:monetization_on',
          routerLinkActiveOptions: { exact: true }
        }
      );
    }


    return links;
  }

}
