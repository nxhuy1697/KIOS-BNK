package com.KIOS_BE.demo.services;

import com.KIOS_BE.demo.models.request.UserRequest;
import com.KIOS_BE.demo.models.response.BaseResponse;

public interface IUserService{
    BaseResponse createUser(UserRequest request);
}
