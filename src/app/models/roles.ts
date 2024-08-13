export class Roles {
  id: number = 0;
  role_name: string = '';

  constructor(role?: any) {
    if (role) {
      this.id = role.id ? role.id : 0;
      this.role_name = role.role_name;
      
    }

  }
}

