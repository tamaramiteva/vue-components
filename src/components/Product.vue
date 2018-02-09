<template>
  <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/inflate-sofa.jpg" class="image">
        <div style="padding: 14px;">
            <span>{{ productName }}</span>
            <div class="bottom clearfix">
                <el-button type="text" class="button" @click="addToCart">Add to Cart</el-button>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'Product',
    props: ['productName'],
    methods: {
        addToCart() {
            this.$eventBUS.$emit('add-product-to-cart', this.productName)
        }
    }
}
</script>

<style scoped>

</style>
