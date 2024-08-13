export class Site {
  id: number;
  name: string;
  address: string;

  constructor(site?: any) {
    if (site) {
      this.id = site.id;
      this.name = site.name;
      this.address = site.address;
    } else {
      this.id = 0;
      this.name = '';
      this.address = '';
    }
  }

}
