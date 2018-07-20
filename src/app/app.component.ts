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
  language: any;
  
  types = [
    'Fullstack',
    'Micro',
    'Frontend',
    'Backend'
  ];

  constructor(private frameworkService: FrameworkService) { }

  ngOnInit() {
    this.framework = {};
    
    this.language = {};

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

  postLanguage(lfrm: FormGroup) {
    this.frameworkService.postLanguage(this.language).subscribe(response => {
      this.languages.push(response);
      
      lfrm.reset();
    });
  }

  getLanguages() {
    this.frameworkService.getLanguages().subscribe(data => this.languages = data);
  }

  listFrameworkByLanguage(event) {
    this.frameworkService.getFrameworksByLanguage(event.srcElement.value).subscribe(data => this.frameworks = data);
  }
}
