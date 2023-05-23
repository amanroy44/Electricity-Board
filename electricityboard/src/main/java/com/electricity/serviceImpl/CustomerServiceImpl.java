package com.electricity.serviceImpl;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.electricity.entity.Customer;
import com.electricity.repo.CustomerRepository;
import com.electricity.service.CustomerService;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	public CustomerRepository customerRepository;

	// adding new user
	@Override
	public Customer createCustomer(Customer user) throws Exception {
		Customer local = this.customerRepository.save(user);

		return local;
	}

	// getting list of all users
	@Override
	public Iterable<Customer> showAllCustomer() {
		return this.customerRepository.findAll();
	}

	// getting user by user id
	@Override
	public Customer findCustomerById(long id) {
		return this.customerRepository.findById(id);
	}

	// delete user by user id
	@Override
	public void deleteCustomerById(long id) {
		this.customerRepository.deleteById(id);
	}

	// updating the customer table
	@Override
	public Customer updateCustomer(long id, Customer cust) {
		Customer customer = this.customerRepository.getById(id);
		if (customer != null) {
			customer.setApplicantName(cust.getApplicantName());
			customer.setGender(cust.getGender());
			customer.setDistrict(cust.getDistrict());
			customer.setState(cust.getState());
			customer.setPincode(cust.getPincode());
			customer.setOwnership(cust.getOwnership());
			customer.setGovt_id(cust.getGovt_id());
			customer.setId_number(cust.getId_number());
			customer.setCategory(cust.getCategory());
			customer.setLoad(cust.getLoad());
			customer.setDate_of_application(cust.getDate_of_application());
			customer.setDate_of_approval(cust.getDate_of_approval());
			customer.setModified_date(cust.getModified_date());
			customer.setStatus(cust.getStatus());
			customer.setReviewer_id(cust.getReviewer_id());
			customer.setReviewer_name(cust.getReviewer_name());
			customer.setReviewer_comments(cust.getReviewer_comments());
			Customer updatedCustomer = customerRepository.save(customer);

			return new Customer(updatedCustomer.getId(), updatedCustomer.getApplicantName(),
					updatedCustomer.getGender(), updatedCustomer.getDistrict(), updatedCustomer.getState(),
					updatedCustomer.getPincode(), updatedCustomer.getOwnership(), updatedCustomer.getGovt_id(),
					updatedCustomer.getId_number(), updatedCustomer.getCategory(), updatedCustomer.getLoad(),
					updatedCustomer.getDate_of_application(), updatedCustomer.getDate_of_approval(),
					updatedCustomer.getModified_date(), updatedCustomer.getStatus(), updatedCustomer.getReviewer_id(),
					updatedCustomer.getReviewer_name(), updatedCustomer.getReviewer_comments());
		} else {
			return null;
		}

	}
	
	//Getting list of applicants within date range
	@Override
	public List<Customer> findByDates(Date d1, Date d2){
		return this.customerRepository.findByDateBetween(d1, d2);
	}
}
