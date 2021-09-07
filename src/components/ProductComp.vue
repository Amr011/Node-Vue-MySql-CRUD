<template>
  <div>
    <div class="container card " v-for="item in items" :key="item.product_id" >
      <div class="card-header">
        <p class="card-header-title is-3   ">
          <i class="fa fa-paper-plane mr-4 fa-lg"></i>
{{ item.product_name }}
        </p>
        <i class="card-header-icon" aria-label="more options" @click="toggle()">
          <span class="icon">
            <i
              class="fas fa-angle-down fa-lg"
              :class="{ 'fa-angle-up': isActive }"
              aria-hidden="true"
            ></i>
          </span>
        </i>
      </div>
      <div  class="card-content is-light">
        <div class="content">
          <div class="card-image">
            <div class="image is-2by1">
              <img src="../assets/logo.png" alt="Placeholder image" />
            </div>
          </div>
          <br />
          {{item.product_price}}
          <br />
          <br />
          PostCat
          <br />

          <div class="block">
            Posted in <code>PostDate</code> by
            <code>Post User</code
            >.
          </div>
        </div>
      </div>
      <div v-if="isActive" class="card-footer">
        <router-link to="" class="card-footer-item "
          ><i class="fa fa-trash  carddeleteiconcolor" aria-hidden="true"></i
        ></router-link>

        <router-link to="" class="card-footer-item "
          ><i class="fa fa-edit cardediticoncolor" aria-hidden="true"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProductComp",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getProducts();
  },
 
  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:7000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";

.container {
  margin-top: 40px;
  width: 400px;
}
.card {
  margin-bottom: -15px;
}
.carddeleteiconcolor {
  color: rgb(230, 51, 51);
}
.cardediticoncolor {
  color: rgb(65, 189, 27);
}
</style>
