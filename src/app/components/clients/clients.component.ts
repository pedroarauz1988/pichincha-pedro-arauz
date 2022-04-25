import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client.model';
import { GenderEnum } from 'src/app/models/person.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: ClientModel[] = [];
  isNewClient = false;
  update = false;
  clientForm: FormGroup;

  constructor(public clientService: ClientService, private router: Router, private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      age: ['', Validators.compose([Validators.required])],
      identification: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      status: [true],

    });
  }

  ngOnInit(): void {
    this.clientService.searchClient().subscribe(res => {
      this.clients = res;
    }, (error: HttpErrorResponse) => {
      alert(error.error.message);
    }
    );

  }

  saveClient() {
    debugger
    if (this.clientForm.valid) {
      const clientPresenter: ClientModel = {
        id: '',
        password: this.clientForm.value.password, 
        status: true,
        personPresenter: {
          id: '',
          name: this.clientForm.value.name,
          gender: this.clientForm.value.gender,
          age: this.clientForm.value.age,
          identification: this.clientForm.value.identification,
          address: this.clientForm.value.address,
          phone: this.clientForm.value.phone,
        }
      };
      this.clientService.save(clientPresenter).subscribe(data => {
        alert("Cliente registrado correctamente")
        this.isNewClient = false;
        this.ngOnInit();
      });
    } else {
      alert("Debe llenar todos los campos");
    }

  }

  updateClient() {

  }

  close() {
    this.isNewClient = false

  }

  searchClient(name: string) {

  }

  createClient() {
    this.isNewClient = true

  }
  editClient(client: ClientModel) {

  }

  deleteClient(client: ClientModel) {

  }

}
