import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="text-align:center; margin-top: 50px;">
      <h1>Unit Converter</h1>

      <!-- Pounds to Kilograms -->
      <div style="margin-bottom: 30px;">
        <label for="pounds">Pounds:</label>
        <input type="number" [(ngModel)]="pounds" id="pounds" />
        <p>{{ pounds }} lbs = {{ poundsToKg(pounds) | number : '1.2-2' }} kg</p>
      </div>

      <!-- Kilograms to Pounds -->
      <div>
        <label for="kilograms">Kilograms:</label>
        <input type="number" [(ngModel)]="kilograms" id="kilograms" />
        <p>
          {{ kilograms }} kg =
          {{ kgToPounds(kilograms) | number : '1.2-2' }} lbs
        </p>
      </div>
    </div>
  `,
})
export class AppComponent {
  pounds: number = 0;
  kilograms: number = 0;

  poundsToKg(pounds: number): number {
    return pounds * 0.453592;
  }

  kgToPounds(kg: number): number {
    return kg / 0.453592;
  }
}
