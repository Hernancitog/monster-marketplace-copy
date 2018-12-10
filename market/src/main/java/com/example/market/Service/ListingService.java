package com.example.market.Service;

import com.example.market.Dao.ListingDao;
import com.example.market.Entity.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class ListingService {
    @Autowired
    ListingDao dao;

    @Transactional
    public Listing getListing(Integer id){
        // return dao.getOne(id) can potentially return null and throw an exception
        // Using Optional is a better method of handling a null value from the databse
        Optional<Listing> item = dao.findById(id);
        if(item.isPresent() ) {
            return item.get();
        } else{
            return null;
        }
    }

    @Transactional
    public List<Listing> getAll(){
        return dao.findAll();
    }

}
