import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  frameworks = [
        {"id": 1,
        "name": "Flask",
        "url_image": "url",
        "site": "www.flask.com.br",
        "year_creation": 2012,
        "creator": "Leonard Stuart",
        "latest_stable_release": "4",
        "type": "Back",
        "opinion": "very good",
        "pros_cons": "Nothing to Say",
        "id_language": 4,
        "created_at": "2018-07-19 22:00:35",
        "updated_at": "2018-07-19 22:00:35",
        "language": "Python"}
  ];  
}
