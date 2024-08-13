export class User {
    id: number;
    first_name: string;
    last_name: string;
    password: string;
    phone: string;
    email: string;
    role: string;
    status: string;
    role_id: number;
    site : string;
    site_id: number;
  
    constructor(user: any) {
        this.id = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.password = user.password;
        this.phone = user.phone;
        this.email = user.email;
        this.role = (user.role_id && user.role_id.role_name) ? user.role_id.role_name : user.role;
        this.status = user.status;
        this.role_id = user.role_id;
        this.site_id = user.site_id;
        this.site = user.site_id ? user.site_id.name : user.site;
    }
  
}
  