<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
          Shopy
        </a>
        <Cart></Cart>
      </nav>

      <br>

      <br>

      <el-row :gutter="20">
        <el-col :span="6">
          <Product product-name="Inflate Sofa 1"></Product>
        </el-col>
        <el-col :span="6">
          <Product product-name="Inflate Sofa 2"></Product>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>

import Cart from './components/Cart'
import Product from './components/Product'

export default {
  name: 'app',
  components: {
    Cart,
    Product
  }
}
</script>

<style>
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
