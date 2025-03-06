import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-01',
  template: `
    <div class="hello-universe">
      <h1>Hello Universe</h1>
    </div>
  `,
  styles: [`
    :host {
      color: #a144eb;
    }

    .hello-universe {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh; /* Reduce la altura del div */
      background-color:rgb(0, 236, 253);
    }

    h1 {
      font-size: 4em;
      text-align: center;
    }
  `]
})
export class Ejercicio01Component {

}
