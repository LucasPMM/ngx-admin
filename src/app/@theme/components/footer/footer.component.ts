import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2017 and adapted by Lucas P Mariz</span>
    <div class="socials">
      <a href="https://github.com/LucasPMM" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/lucas.paulo2" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.linkedin.com/in/lucas-mariz-4845b6164/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
