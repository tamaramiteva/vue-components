<template>
    <div>
        

        <el-popover
            placement="bottom"
            width="400"
            trigger="hover">

            <el-table :data="items">
                <el-table-column width="150" property="product" label="product"></el-table-column>
                <el-table-column width="100" property="color" label="color"></el-table-column>
                <el-table-column width="300" property="quantity" label="quantity"></el-table-column>
            </el-table>

            <el-badge slot="reference" :value="itemsQuantity" class="item">
                <a href="#"><span class="oi oi-cart" title="cart" aria-hidden="true"></span></a>
            </el-badge>

      </el-popover>

    </div>
</template>

<script>
export default {
  
    name: 'Cart',

    data() {
        return {
            items: []
        } 
    },

    created() {
        this.$eventBUS.$on('add-product-to-cart', this.addProductToCart)
    },

    beforeDestroy() {
        this.$eventBUS.$off('add-product-to-cart');
    },

    methods: {
        addProductToCart(productName) {
            this.items.push({
                product: productName,
                color: '-',
                quantity: 1
            });
        }
    },

    computed: {
        itemsQuantity() {
            return this.items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
        }
    }

}
</script>

<style scoped>
    span.oi-cart {
        font-size: 25px;
    }
</style>


