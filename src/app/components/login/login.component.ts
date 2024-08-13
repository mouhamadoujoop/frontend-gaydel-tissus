import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
    RouterLink,
    MatSnackBarModule,
    NgxLoadingModule
  ]
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  inputType = 'password';
  visible = false;
  user!: User;
  token:any;
  public loading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private snackbar: MatSnackBar,
  ) {}

  send() {
    this.loading = true;
    const formData = this.form.getRawValue();
    const data = {
      email : formData.email,
      password : formData.password
    }

    this.authService.login(data).subscribe((result:any) => {
    if(result.status != true)
    {
      alert(result.message);
        this.loading = false;
        // this.router.navigate(['/login']);

        // this.snackbar.open(
        //   result.message,
        //   'Message',
        //   {
        //     duration: 10000
        //   }
        // );
      } else if (result.status === true) {
        this.loading = false;
        this.token = result.token;
        sessionStorage.setItem('token', this.token);
        this.user = new User(result.userConnected);
        this.localStorage.saveData('dataUser', this.user);
        this.localStorage.saveData('dataRole', result.userConnected.roles);
        this.router.navigate(['']);
        this.snackbar.open(
          "Bienvenue dans Votre espace de gestion de GAYDEL TISSU",
          'MERCI',
          {
            duration: 10000
          }
        );
      } else{
        this.loading = false;
        this.router.navigate(['/login']);
        // this.snackbar.open(
        //   "Email ou Mot de passe incorrect",
        //   'MERCI DE REESSAYER',
        //   {
        //     duration: 10000
        //   }
        // );

      }


    });
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
