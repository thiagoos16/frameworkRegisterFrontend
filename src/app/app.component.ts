import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FrameworkService } from './framework.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  frameworks: Array<any>;
  framework: any;

  languages: Array<any>;

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit() {
    this.framework = {};

    this.getFrameworks();

    this.getLanguages();
  }

  getFrameworks() {
    this.frameworkService.getFrameworks().subscribe(data => this.frameworks = data);
  }

  postFramework(frm: FormGroup) {
    this.frameworkService.postFramework(this.framework).subscribe(response => {
      this.frameworks.push(response);
      
      frm.reset();
    });
  }

  getLanguages() {
    this.frameworkService.getLanguages().subscribe(data => this.languages = data);
  }
}
