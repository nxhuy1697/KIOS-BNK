import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/assets/models/base-response.models';

import { CommandURL } from '../api-commands';
import { Screen } from 'src/assets/models/screen';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private httpClient : HttpClient) { }
  create (screen: Screen) {
    return this.httpClient.post<BaseResponse>(CommandURL.CREATE_SCREEN, screen);
  }
  get (screen: Screen) {
    return this.httpClient.post<BaseResponse>(CommandURL.GET_SCREEN, screen);
  }
  update (screen: Screen) {
    return this.httpClient.post<BaseResponse>(CommandURL.UPDATE_SCREEN, screen);
  }
  delete (screen: Screen) {
    return this.httpClient.post<BaseResponse>(CommandURL.DELETE_SCREEN, screen);
  }
}
