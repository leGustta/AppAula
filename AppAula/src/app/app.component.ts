import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Notificação', url: '/notificacao', icon: 'bell' },
    { title: 'Lembrete', url: '/lembrete', icon: 'question-mark' },
    { title: 'Data', url: '/data', icon: 'Calendar' },
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Botões', url: '/botao', icon: 'construct' },
    { title: 'Navegação2', url: '/navegacao2', icon: 'code' },
  ];
  public labels = ['Familia', 'Amigos', 'Notas', 'Texto'];
  constructor() {}
}
