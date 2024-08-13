
import { AuthGuard } from './guards/auth/auth.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { VexRoutes } from '@vex/interfaces/vex-route.interface';

export const appRoutes: VexRoutes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
      data : {
        toolbarShadowEnabled: false
      }
  },
  {
    path: 'pdf',
    loadComponent: () =>
      import('./components/pdf-invoices/pdf-invoices.component').then(
        (m) => m.PdfInvoicesComponent
      ),
    canActivate:[AuthGuard],
    data : {
      allowedRoles: ['CAISSIERE'],
      toolbarShadowEnabled: false
    }
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    data: { allowedRoles: ['SUPER_ADMIN', 'ADMIN', 'SUPERVISEUR', 'CAISSIERE'] },
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
          toolbarShadowEnabled: false
        }
      },
      {
        path: 'roles',
        loadComponent: () =>
          import('./components/roles/roles.component').then(
            (m) => m.RolesComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
          toolbarShadowEnabled: false
        }
      },
      {

        path: 'clients',
        loadComponent: () =>
          import('./components/clients/clients.component').then(
            (m) => m.ClientsComponent

          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
            toolbarShadowEnabled: false
          }
        },
     {
        path: 'sites',
        loadComponent: () =>
          import('./components/sites/sites.component').then(
            (m) => m.SitesComponent

          ),
       canActivate:[AuthGuard],
       data : {
         allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
          toolbarShadowEnabled: false
        }
      },
      {
        path: 'accounts',
        loadComponent: () =>
          import('./components/accounts/accounts.component').then(
            (m) => m.AccountsComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN', 'ADMIN', 'CAISSIERE'],
            toolbarShadowEnabled: false
          }
        },
       {

        path: 'stocks',
        loadComponent: () =>
          import('./components/stock/stock.component').then(
            (m) => m.StockComponent
          ),
         canActivate:[AuthGuard],
         data : {
           allowedRoles: ['SUPER_ADMIN', 'SUPERVISEUR'],
          toolbarShadowEnabled: false
        }
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./components/transactions/transactions.component').then(
            (m) => m.TransactionsComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN'],
            toolbarShadowEnabled: false
          }
        },
        {
        path: 'entrees',
        loadComponent: () =>
          import('./components/stock-replenishment/stock-replenishment.component').then(
            (m) => m.StockReplenishmentComponent
          ),
          canActivate:[AuthGuard],
          data : {
            allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
          toolbarShadowEnabled: false
        }
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./components/users/users.component').then(
            (m) => m.UsersComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN'],
          toolbarShadowEnabled: false
        }
      },
      {
        path: 'deplacements',
        loadComponent: () =>
          import('./components/stock-transfer/stock-transfer.component').then(
            (m) => m.StockTransferComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN', 'ADMIN'],
          toolbarShadowEnabled: false
        }
      },
      {
        path: 'depenses',
        loadComponent: () =>
          import('./components/depense/depense.component').then(
            (m) => m.DepenseComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPER_ADMIN'],
          toolbarShadowEnabled: false
        }
      },

      {
        path: 'sales',
        loadComponent: () =>
          import('./components/sales/sales.component').then(
            (m) => m.SalesComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPERVISEUR', 'CAISSIERE'],
          toolbarShadowEnabled: false
        }
      },

      {
        path: 'new-sale',
        loadComponent: () =>
          import('./components/new-sale/new-sale.component').then(
            (m) => m.NewSaleComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPERVISEUR', 'CAISSIERE'],
          toolbarShadowEnabled: false
        }
      },

      {
        path: 'current-sale',
        loadComponent: () =>
          import('./components/current-sale/current-sale.component').then(
            (m) => m.CurrentSaleComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPERVISEUR', 'CAISSIERE'],
          toolbarShadowEnabled: false
        }
       },
      {
        path: 'versements',
        loadComponent: () =>
          import('./components/versements/versements.component').then(
            (m) => m.VersementsComponent
          ),
        canActivate:[AuthGuard],
        data : {
          allowedRoles: ['SUPERVISEUR', 'ADMIN'],
          toolbarShadowEnabled: false
        }
      }

    ]
  },

];
