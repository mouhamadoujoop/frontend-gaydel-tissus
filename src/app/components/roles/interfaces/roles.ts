export class Roles {
  id: number;
  role_name: string;

  constructor(role: any) {
    this.id = role.id;
    this.role_name = role.role_name;

  }
}

