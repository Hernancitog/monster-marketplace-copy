/**
 *
 */
package com.example.market.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * @author Chuma
 *
 */
@Entity
@Table
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "USERNAME", nullable = false)
	@NotNull(message = "Please enter a username")
	@Size(max = 20, message = "Your username should be between 5 - 10 characters.")
	private String username;

	@Column(name = "EMAIL", nullable = false)
//	@Pattern(regexp = ".+@.+\\..+", message = "Wrong email!")
	@NotNull(message = "Please enter an email")
	private String email;

	@Column(name = "PASSWORD", nullable = false)
	@NotNull(message = "Please enter a password")
	@Size(max = 25, message = "Your username should be between 5 - 10 characters.")
	private String password;

	@Column(name = "ADDRESS")
	private String address;

	@Column(name = "PHONE")
//	@Pattern(regexp = "^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$", message = "Wrong phone!")
	private String phone;

	@Size(message = "Your first name should be between 5 - 10 characters.")
	@NotNull(message = "Please enter a first name")
	@Column(name = "FIRST_NAME", nullable = false)
	private String firstName;

	@Size(message = "Your last name should be between 5 - 10 characters.")
	@NotNull(message = "Please enter a last name")
	@Column(name = "LAST_NAME", nullable = false)
	private String lastName;

	/**
	 * Default Constructor
	 */
	public Member() {
	}

	/**
	 * @param username
	 * @param email
	 * @param password
	 * @param address
	 * @param phone
	 * @param firstName
	 * @param lastName
	 */
	public Member(String username, String email, String password, String address, String phone, String firstName,
			String lastName) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
		this.phone = phone;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username
	 *            the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email
	 *            the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password
	 *            the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address
	 *            the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * @param phone
	 *            the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName
	 *            the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName
	 *            the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Member [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password
				+ ", address=" + address + ", phone=" + phone + ", firstName=" + firstName + ", lastName=" + lastName
				+ "]";
	}

}
