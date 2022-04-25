
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

 public searchClient() {
      let url = '';
        url = environment.apiUrl + '/clientes/search';
      return this.http.get<ClientModel[]>(url);
  }

  public save(client: ClientModel) {
    let url = '';
        url = environment.apiUrl + '/clientes';
      return this.http.post<ClientModel>(url, client);
  }
}
