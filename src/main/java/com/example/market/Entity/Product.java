/**
 * 
 */
package com.example.market.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * @author Chuma
 *
 */
@Entity
@Table
public class Product {

	@Id
	@Column(name = "PRODUCT_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@NotNull(message = "Please enter a product name")
	@Column(nullable = false)
	private String title;

	// @JoinColumn(name = "CATEGORY_ID")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	private Category category;

	// @JoinColumn(name = "SUBCATEGORY_ID")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	private SubCategory subCategory;

	// @JoinColumn(name = "STATUS_ID")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	private Status status;

	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	private Member seller;

	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	private Member buyer;

	@Column(name = "PRICE")
	private float price;

	@Column(name = "POST_DATE", nullable = false)
	private String postDate;

	@Column(name = "DESCRIPTION")
	private String description;
	
	@Column(name = "IMAGE_URL")
	private String urlImage;

	/**
	 * Default Constructor
	 */
	public Product() {
	}

	/**
	 * @param title
	 * @param category
	 * @param subCategory
	 * @param status
	 * @param seller
	 * @param buyer
	 * @param price
	 * @param postDate
	 * @param description
	 */
	public Product(String title, Category category, SubCategory subCategory, Status status, Member seller, Member buyer,
			float price, String postDate, String description, String urlImage) {
		this.title = title;
		this.category = category;
		this.subCategory = subCategory;
		this.status = status;
		this.seller = seller;
		this.buyer = buyer;
		this.price = price;
		this.postDate = postDate;
		this.description = description;
		this.urlImage = urlImage;
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
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title
	 *            the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the category
	 */
	public Category getCategory() {
		return category;
	}

	/**
	 * @param category
	 *            the category to set
	 */
	public void setCategory(Category category) {
		this.category = category;
	}

	/**
	 * @return the subCategory
	 */
	public SubCategory getSubCategory() {
		return subCategory;
	}

	/**
	 * @param subCategory
	 *            the subCategory to set
	 */
	public void setSubCategory(SubCategory subCategory) {
		this.subCategory = subCategory;
	}

	/**
	 * @return the status
	 */
	public Status getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(Status status) {
		this.status = status;
	}

	/**
	 * @return the seller
	 */
	public Member getSeller() {
		return seller;
	}

	/**
	 * @param seller
	 *            the seller to set
	 */
	public void setSeller(Member seller) {
		this.seller = seller;
	}

	/**
	 * @return the buyer
	 */
	public Member getBuyer() {
		return buyer;
	}

	/**
	 * @param buyer
	 *            the buyer to set
	 */
	public void setBuyer(Member buyer) {
		this.buyer = buyer;
	}

	/**
	 * @return the price
	 */
	public float getPrice() {
		return price;
	}

	/**
	 * @param price
	 *            the price to set
	 */
	public void setPrice(float price) {
		this.price = price;
	}

	/**
	 * @return the postDate
	 */
	public String getPostDate() {
		return postDate;
	}

	/**
	 * @param postDate
	 *            the postDate to set
	 */
	public void setPostDate(String postDate) {
		this.postDate = postDate;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description
	 *            the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the urlImage
	 */
	public String getUrlImage() {
		return urlImage;
	}

	/**
	 * @param urlImage the urlImage to set
	 */
	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", category=" + category + ", subCategory=" + subCategory
				+ ", status=" + status + ", seller=" + seller + ", buyer=" + buyer + ", price=" + price + ", postDate="
				+ postDate + ", description=" + description + ", urlImage=" + urlImage + "]";
	}

}
