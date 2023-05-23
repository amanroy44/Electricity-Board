package com.electricity.repo;

import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.electricity.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long>{
	
	//@Query(nativeQuery =  true , value="select * from customer c where c.id = :id OR c.id  :id")
	public Customer findById(long id );
	
	//Query to fetch details based on date range
	@Query(nativeQuery = true, value="select * from Customer c where c.date_of_application between :startDate and :endDate")
	List<Customer> findByDateBetween(Date startDate, Date endDate);
	
	
	
	
}
