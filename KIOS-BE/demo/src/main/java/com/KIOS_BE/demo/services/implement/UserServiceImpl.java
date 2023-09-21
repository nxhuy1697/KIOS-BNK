package com.KIOS_BE.demo.services.implement;

import com.KIOS_BE.demo.mapper.UserMapper;
import com.KIOS_BE.demo.models.request.UserRequest;
import com.KIOS_BE.demo.models.response.BaseResponse;
import com.KIOS_BE.demo.services.IUserService;
import com.google.common.base.Strings;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserMapper mapper;
    @Override
    public BaseResponse createUser(UserRequest request) {
        try{
            //validate null
            if (request == null || Strings.isNullOrEmpty(request.getName())
                    || Strings.isNullOrEmpty(request.getUserName())
                    || Strings.isNullOrEmpty(request.getPassword())) {
                return new BaseResponse(String.valueOf(HttpStatus.BAD_REQUEST.value()),
                        "Fiels is requried");
            }
            String hashedPassword = BCrypt.hashpw(request.getPassword(), BCrypt.gensalt(10));
            request.setPassword(hashedPassword);

            return null;
        }catch (Exception e){
            return new BaseResponse("1", "Failure");
        }
    }
}
