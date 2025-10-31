import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'mean-stack-frontend';
  name = '';
  response: any;

  constructor(private apiService: ApiService) {}

  submitThing() {
    this.apiService.createThing(this.name).subscribe(res => {
      this.response = res;
    });
  }
}
