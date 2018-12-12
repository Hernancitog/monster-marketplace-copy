package com.example.market.Entity;

import javax.persistence.*;

@Entity
@Table
public class Listing {

    @Id
//    @Column(name = "LISTING_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int price;
    private String name;
    private String seller;

    public Listing(){}

    public Listing(int price, String name, String seller) {
        this.price = price;
        this.name = name;
        this.seller = seller;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPrice() {
        return this.price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeller() {
        return this.seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    @Override
    public String toString() {
        return "Listing{" +
                "id=" + id +
                ", price=" + price +
                ", name='" + name + '\'' +
                ", seller='" + seller + '\'' +
                '}';
    }
}

