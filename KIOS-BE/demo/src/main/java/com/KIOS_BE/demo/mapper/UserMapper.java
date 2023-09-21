package com.KIOS_BE.demo.mapper;

import com.KIOS_BE.demo.models.request.EmployeeRequest;
import com.KIOS_BE.demo.models.response.UserResponse;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    UserResponse createEmployee(EmployeeRequest request);
}
