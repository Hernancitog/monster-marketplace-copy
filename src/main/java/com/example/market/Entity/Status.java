/**
 *
 */
package com.example.market.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Chuma
 *
 */
@Entity
@Table
public class Status {
	@Id
	private int id;

	@Column(nullable=false)
	private String status;

	public Status(){}

	/**
	 * @param status
	 */
	public Status(String status) {
		this.status = status;
	}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    /**
	 * @return the value
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the value to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Status [id=" + id + ", value=" + status + "]";
	}

}
