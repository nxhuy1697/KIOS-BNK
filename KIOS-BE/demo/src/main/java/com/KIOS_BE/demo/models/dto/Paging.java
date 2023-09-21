package com.KIOS_BE.demo.models.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Paging {
    private int page;
    private int limit;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }
}
