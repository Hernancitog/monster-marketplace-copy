package com.example.market;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MarketApplicationTests {

    // Dummy test
    @Test
    public void contextLoads() {
        int a = 1;
        int b = 3;
        Assert.assertEquals(false, a == b);
    }

}
