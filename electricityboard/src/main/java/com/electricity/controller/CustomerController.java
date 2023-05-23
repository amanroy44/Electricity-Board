package com.electricity.controller;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.electricity.entity.Customer;
import com.electricity.entity.GovtIdType;
import com.electricity.serviceImpl.CustomerServiceImpl;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {
	
	@Autowired
	CustomerServiceImpl customerService;
	//GovtIdType govtIdType;
	
	//Endpoint to create a new Request
	@PostMapping("/")
	@Transactional
	public Customer createCustomer(@RequestBody Customer customer) throws Exception{
		
		if(customer.getGovt_id().equals(GovtIdType.PAN) || customer.getGovt_id().equals(GovtIdType.AADHAAR)) {
			throw new Exception();
		}
		return this.customerService.createCustomer(customer);
	}
	
	//Endpoint to search a particular Applicant by id
	@GetMapping("/search/{id}")
	public Customer getCustomer(@PathVariable("id") long id) {
		return this.customerService.findCustomerById(id);
	}
	
	//Endpoint to get list of all applicants
	@GetMapping("/show-customer")
	public Iterable<Customer> getAllCustomers(){
		return this.customerService.showAllCustomer();
	}
	
	//Endpoint to delete by id
	@DeleteMapping("/delete/{id}")
	@ResponseBody
	public String deleteCustomer(@PathVariable("id") long id) {
		this.customerService.deleteCustomerById(id);
		return "Customer Deleted Success!!";
	}
	
	
	//Endpoint to update the applicant by id and object send as Request body
	@PutMapping("/update/{id}")
	public Customer updateCustomer(@PathVariable("id") long id, @RequestBody Customer cust) {
		return this.customerService.updateCustomer(id, cust);
	}
	
	//Endpoint to get the list of Applicants within date range
	@GetMapping("/search/{date1}/{date2}")
	public List<Customer> getCustomerByDate(@PathVariable("date1") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date1, @PathVariable("date2") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date2) {
		return this.customerService.findByDates(date1, date2);
	}
	
	

}
