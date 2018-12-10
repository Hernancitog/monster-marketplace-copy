/**
 *
 */
package com.example.market.Entity;

import javax.persistence.*;
import javax.validation.constraints.Size;

/**
 * @author Chuma
 *
 */
@Entity
@Table
public class SubCategory {
	@Id
    private int id;

    @ManyToOne(cascade = CascadeType.MERGE, fetch= FetchType.EAGER)
	private Category category;

	@Column(name = "NAME")
	@Size(min = 5, max = 10, message = "Your subcategory name should be between 5 - 10 characters.")
	private String name;

	/**
	 * Default Constructor
	 */
	public SubCategory() {
	}

	/**
	 * @param category
	 * @param name
	 */
	public SubCategory(Category category, String name) {
		this.category = category;
		this.name = name;
	}

    public int getId() {
        return id;
    }

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
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the category
	 */
	public Category getCategory() {
		return category;
	}

	/**
	 * @param category the category to set
	 */
	public void setCategory(Category category) {
		this.category = category;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "SubCategory [id=" + id + ", category=" + category + ", name=" + name + "]";
	}
}
