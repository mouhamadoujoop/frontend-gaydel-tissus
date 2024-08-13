import { Component } from '@angular/core';
import { RolesService } from '../../services/role/roles.service';
import { Roles } from '../../models/roles';


@Component({
  selector: 'vex-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  standalone : true

})
export class RolesComponent {
  roles! : Roles[]
constructor(private roleService : RolesService) {}
ngOnInit():void {
    this.getRoles()
}
  getRoles(){
  this.roleService.getRoles().subscribe((result: any) => {
    this.roles = result.data;}
  );
    console.log(this.roles);
  }
}
