package com.trey.relationships.models;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

//...
@Entity
@Table(name="licenses")
public class License {
 
 @Id
 private Long id;
 private String number;
 private LocalDate expirationDate;
 private String state;
 @Column(updatable=false)
 private Date createdAt;
 private Date updatedAt;
 @OneToOne(fetch=FetchType.LAZY)
 @JoinColumn(name="person_id")
 private Person person;
 
 
 public License() {
 }
 
 
 
 
 
 @PrePersist
 protected void onCreate(){
 	this.createdAt = new Date();
 }
 @PreUpdate
 protected void onUpdate(){
 	this.updatedAt = new Date();
 }
 
public License(String number, LocalDate expirationDate, String state, Person person) {
	super();
	this.number = number;
	this.expirationDate = expirationDate;
	this.state = state;
	this.person = person;
}





public void setId(Long id) {
	this.id = id;
}
public Long getId() {
	return id;
}
public String getNumber() {
	return number;
}
public void setNumber(String number) {
	this.number = number;
}
public LocalDate getExpirationDate() {
	return expirationDate;
}
public void setExpirationDate(LocalDate date) {
	this.expirationDate = date;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public Date getCreatedAt() {
	return createdAt;
}
public Date getUpdatedAt() {
	return updatedAt;
}
public Person getPerson() {
	return person;
}
public void setPerson(Person person) {
	this.person = person;
}
 
 
 
 
}

