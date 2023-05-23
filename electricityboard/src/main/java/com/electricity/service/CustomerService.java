package com.electricity.service;


import java.util.Date;
import java.util.List;

import com.electricity.entity.Customer;

public interface CustomerService {
	
	public Customer createCustomer(Customer customer) throws Exception;
	public Customer findCustomerById(long id);
	public void deleteCustomerById(long id);
	public Customer updateCustomer(long id, Customer cust);
	public Iterable<Customer> showAllCustomer();
	public List<Customer> findByDates(Date d1, Date d2);
}
