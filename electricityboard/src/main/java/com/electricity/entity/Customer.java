package com.electricity.entity;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name = "customer")
public class Customer {
	
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	@Column(name = "Applicant_Name")
	private String applicantName;
	@Column(name = "Gender")
	private String gender;
	@Column(name = "District")
	private String district;
	@Column(name = "State")
	private String state;
	@Column(name = "Pincde")
	private String pincode;
	@Column(name = "Ownership")
	private String ownership;
	@Column(name = "GovtID_Type")
	private String govt_id;
	@Column(name = "ID_Number")
	private String id_number;
	@Column(name = "Category")
	private String category;
	@Column(name = "Load_Applied")
	private int load;
	@Column(name = "Date_of_Application")
	@JsonFormat(pattern="yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
	private Date date_of_application;
	@Column(name = "Date_of_Approval")
	@JsonFormat(pattern="yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
	private Date date_of_approval;
	@Column(name = "Modified_Date")
	//@JsonFormat(pattern="yyyy-MM-dd", shape = Shape.STRING)
	@JsonFormat(pattern="yyyy-MM-dd", shape = JsonFormat.Shape.STRING)
	private Date modified_date;
	@Column(name = "Status")
	private String status;
	@Column(name = "Reviewer_ID")
	private String reviewer_id;
	@Column(name = "Reviewer_Name")
	private String reviewer_name;
	@Column(name = "Reviewer_Comments")
	private String reviewer_comments;
	
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getApplicantName() {
		return applicantName;
	}


	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getDistrict() {
		return district;
	}


	public void setDistrict(String district) {
		this.district = district;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	public String getOwnership() {
		return ownership;
	}


	public void setOwnership(String ownership) {
		this.ownership = ownership;
	}


	public String getGovt_id() {
		return govt_id;
	}


	public void setGovt_id(String govt_id) {
		this.govt_id = govt_id;
	}


	public String getId_number() {
		return id_number;
	}


	public void setId_number(String id_number) {
		this.id_number = id_number;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public int getLoad() {
		return load;
	}


	public void setLoad(int load) {
		this.load = load;
	}


	public Date getDate_of_application() {
		return date_of_application;
	}


	public void setDate_of_application(Date date_of_application) {
		this.date_of_application = date_of_application;
	}


	public Date getDate_of_approval() {
		return date_of_approval;
	}


	public void setDate_of_approval(Date date_of_approval) {
		this.date_of_approval = date_of_approval;
	}


	public Date getModified_date() {
		return modified_date;
	}


	public void setModified_date(Date modified_date) {
		this.modified_date = modified_date;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getReviewer_id() {
		return reviewer_id;
	}


	public void setReviewer_id(String reviewer_id) {
		this.reviewer_id = reviewer_id;
	}


	public String getReviewer_name() {
		return reviewer_name;
	}


	public void setReviewer_name(String reviewer_name) {
		this.reviewer_name = reviewer_name;
	}


	public String getReviewer_comments() {
		return reviewer_comments;
	}


	public void setReviewer_comments(String reviewer_comments) {
		this.reviewer_comments = reviewer_comments;
	}


	public Customer() {
		super();
	}


	public Customer(Long id, String applicantName, String gender, String district, String state, String pincode,
			String ownership, String govt_id, String id_number, String category, int load, Date date_of_application,
			Date date_of_approval, Date modified_date, String status, String reviewer_id, String reviewer_name,
			String reviewer_comments) {
		super();
		this.id = id;
		this.applicantName = applicantName;
		this.gender = gender;
		this.district = district;
		this.state = state;
		this.pincode = pincode;
		this.ownership = ownership;
		this.govt_id = govt_id;
		this.id_number = id_number;
		this.category = category;
		this.load = load;
		this.date_of_application = date_of_application;
		this.date_of_approval = date_of_approval;
		this.modified_date = modified_date;
		this.status = status;
		this.reviewer_id = reviewer_id;
		this.reviewer_name = reviewer_name;
		this.reviewer_comments = reviewer_comments;
	}
	
	
	
	
	

}

