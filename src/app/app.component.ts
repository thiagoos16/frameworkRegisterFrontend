import { Component } from '@angular/core';

import { FrameworkService } from './framework.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  frameworks: Array<any>;

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit() {
    this.getFrameworks();
  }

  getFrameworks() {
    this.frameworkService.getFrameworks().subscribe(data => this.frameworks = data);
  }
}
