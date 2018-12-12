/**
 *
 */
package com.example.market.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

/**
 * @author Chuma
 *
 */
@Entity
@Table
public class Category {
	@Id
	private int id;

	@Size(min = 5, max = 10, message = "Your category name should be between 5 - 10 characters.")
	private String name;

	/**
	 * Default Constructor
	 */
	public Category() {
	}

	/**
	 * @param name
	 *            the Category name
	 */
	public Category(String name) {
		this.name = name;
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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Category{" + "id=" + id + ", name='" + name + '\'' + '}';
	}
}
