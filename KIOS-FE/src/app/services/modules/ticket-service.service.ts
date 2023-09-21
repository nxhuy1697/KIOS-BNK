import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/assets/models/base-response.models';

import { CommandURL } from '../api-commands';
import { Ticket } from 'src/assets/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  constructor(private httpClient : HttpClient) { }
  create (ticket: Ticket) {
    return this.httpClient.post<BaseResponse>(CommandURL.CREATE_TICKET, ticket);
  }
  get (ticket: Ticket) {
    return this.httpClient.post<BaseResponse>(CommandURL.GET_TICKET, ticket);
  }
  update (ticket: Ticket) {
    return this.httpClient.post<BaseResponse>(CommandURL.UPDATE_TICKET, ticket);
  }
  delete (ticket: Ticket) {
    return this.httpClient.post<BaseResponse>(CommandURL.DELETE_TICKET, ticket);
  }
}
