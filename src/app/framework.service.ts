import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  frameworkUrl = 'http://localhost:8000/framework';

  languageUrl = 'http://localhost:8000/language';

  constructor(private http: HttpClient) { }

  getFrameworks() {
      return this.http.get<any[]>(`${this.frameworkUrl}`);
  }

  postFramework(framework: any) {
    return this.http.post(this.frameworkUrl, framework);
  }

  getLanguages() {
    return this.http.get<any[]>(`${this.languageUrl}`);
  }

  getFrameworksByLanguage(id_language) {
    return this.http.get<any[]>(`${this.frameworkUrl + '/listByLanguage/' + id_language}`);
  }
}
