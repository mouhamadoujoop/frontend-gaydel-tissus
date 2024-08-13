import { User } from './user';

export class Versement {
  id: number;
  site_id: number;
  dateVersement: string;
  montantVerse: number;
  user_id: number;
  userName: string;
  user: User;
  callDate: string;
  totalVersement: number;

  constructor(versement: any) {
    const today = new Date();
    this.id = versement.id;
    this.totalVersement = versement.totalVersement;
    this.site_id = versement.site_id;
    this.dateVersement = versement.dateVersement
    this.dateVersement = versement.dateVersement ? versement.dateVersement : today.toISOString().substring(0,10);
    this.montantVerse = versement.montantVerse;
    this.user_id = versement.user_id;
    this.user = versement.user;
    this.userName = `${versement.user.first_name} ${versement.user.last_name}`;
    this.callDate = this.formatDate(new Date(this.dateVersement));
  }
  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString();
    return `${day} ${month} ${year}`;
  }
}
