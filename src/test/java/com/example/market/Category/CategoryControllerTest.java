package com.example.market.Category;

import com.example.market.Controller.Controller;
import com.example.market.Dao.CategoryDao;
import com.example.market.Dao.ListingDao;
import com.example.market.Dao.MemberDao;
import com.example.market.Dao.ProductDao;
import com.example.market.Entity.Category;
import com.example.market.Service.CategoryService;
import com.example.market.Service.ListingService;
import com.example.market.Service.MemberService;
import com.example.market.Service.ProductService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class CategoryControllerTest {

    // ----- Config ----- //
    @Configuration
    static class CategoryServiceTestContextConfiguration {
        @Bean
        public Controller Controller() {
            return new Controller();
        }
        @Bean
        public CategoryService CategoryService() {
            return new CategoryService();
        }
        @Bean
        public CategoryDao CategoryRepository() {
            return Mockito.mock(CategoryDao.class);
        }
        @Bean
        public ListingService ListingService() {
            return new ListingService();
        }
        @Bean
        public ListingDao ListingRepository() { return Mockito.mock(ListingDao.class); }
        @Bean
        public ProductService ProductService() { return new ProductService(); }
        @Bean
        public ProductDao ProductRepository() { return Mockito.mock(ProductDao.class); }
        @Bean
        public MemberService MemberService() { return new MemberService(); }
        @Bean
        public MemberDao MemberRepository() { return Mockito.mock(MemberDao.class); }
    }

    @Autowired
    private CategoryDao categoryDao;
    @Autowired
    private Controller controller;


    // ----- TESTS --- //

    @Test
    public void getAllCategories() {
        Category c1 = new Category("Food");
        c1.setId(1);
        Category c2 = new Category("Appliances");
        c2.setId(2);
        Category c3 = new Category("Home Decor");
        c3.setId(3);

        List<Category> categoryList = new ArrayList<Category>();
        categoryList.add(c1);
        categoryList.add(c2);
        categoryList.add(c3);

        Mockito.when(categoryDao.findAll() ).thenReturn(categoryList);

        List<Category> testList = controller.getAllCategories();

        Assert.assertEquals(true, testList.size()==3);
    }

}
