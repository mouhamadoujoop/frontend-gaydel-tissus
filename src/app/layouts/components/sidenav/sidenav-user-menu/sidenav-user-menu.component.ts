import { Component, OnInit } from '@angular/core';
import { VexPopoverRef } from '@vex/components/vex-popover/vex-popover-ref';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'vex-sidenav-user-menu',
  templateUrl: './sidenav-user-menu.component.html',
  styleUrls: ['./sidenav-user-menu.component.scss'],
  imports: [MatRippleModule, RouterLink, MatIconModule,MatSnackBarModule],
  standalone: true
})
export class SidenavUserMenuComponent implements OnInit {
  constructor(
    private readonly popoverRef: VexPopoverRef,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  close() {
    /** Wait for animation to complete and then close */
    this.authService.logout(localStorage.getItem('dataUser')).subscribe((result:any) => {
      sessionStorage.removeItem('token');
      // sessionStorage.clear();
      // localStorage.clear();
      this.snackbar.open(
        result.message,
        'MERCI',
        {
          duration: 10000
        }
      );

      this.router.navigate(['/login']);
    });
    setTimeout(() => this.popoverRef.close(), 250);
  }
}
