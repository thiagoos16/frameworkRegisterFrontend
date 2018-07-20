import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {

  frameworkUrl = 'http://localhost:8000/framework';

  constructor(private http: HttpClient) { }

  getFrameworks() {
      return this.http.get<any[]>(`${this.frameworkUrl}`);
  }

  postFramework(framework: any) {
    return this.http.post(this.frameworkUrl, framework);
  }
}
