import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Navegação', url: '/navegação', icon: 'code' },
    { title: 'Notificação', url: '/folder/notificação', icon: 'bell' },
    { title: 'Lembrete', url: '/lembrete', icon: 'question-mark' },
    { title: 'Data', url: '/data', icon: 'Calendar' },
    { title: 'Cima', url: '/cima ', icon: 'cloud' },
  ];
  public labels = ['Familia', 'Amigos', 'Notas', 'Texto'];
  constructor() {}
}
