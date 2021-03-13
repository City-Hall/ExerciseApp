<template>
          <div class="columns">
            
            <div class="column is-two-thirds">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Shop
                    </p>
                  </header>
                
                  <div class="card-content">

                      <div class="media" v-for="(x, i) in inventory" :key= i>
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img :src= "x.pic" alt="Placeholder image">
                          </figure>
                        </div>
                        <div class="media-content">
                        <button class="button is-small is-primary is-pulled-right" @click.prevent="add(i)">
                          Add to Cart
                        </button>
                          <p class="title is-4">{{x.name}}</p>
                          <p class="subtitle is-6">${{x.price}}</p>
                        </div>
                      </div>
                  
                     </div>
                  </div>
            </div>
            <div class="column">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Cart
                    </p>
                  </header>

                  <table class="table is-striped is-narrow is-hoverable is-fullwidth">

                    <tr><th>Name</th><th>Qty</th><th>Cost</th></tr>


                    <tr  v-for="(x, i) in cart" :key="i">
                      <td>{{x.name}}</td>
                      <td>{{x.qty}}</td>
                      <td>{{x.price * x.qty}}</td>
                    </tr>


                    <tr><th>Total</th><th></th><th> {{ cart.reduce((tot, x) => tot + x.qty * x.price, 0 ) }} </th></tr>
                  </table>
                
                  <div class="card-content">
                      
                  
                     <button class="button is-success">Checkout</button>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
          data: () => ({
            inventory: [
                { name: 'Dumbbell', price: 3.99, pic: 'https://images-na.ssl-images-amazon.com/images/I/71Z1Ozj%2BM0L._AC_SL1500_.jpg'},
                { name: 'Exersise Mat', price: 10.00, pic: 'https://cdn.shopify.com/s/files/1/1734/8163/products/MAT-B_SPRI-Exercise-Mat-Blue_C.jpg?v=1574193714' },
                { name: 'Gym Membership', price: 50.00, pic: 'https://fitness-nation.net/wp-content/uploads/2019/04/5-Things-to-Consider-When-Buying-a-Gym-Membership-901x601.jpg' },
                { name: 'bike', price: 100.00, pic: 'https://images-na.ssl-images-amazon.com/images/I/81ZaAhrPucL._AC_SL1500_.jpg' },
            ],
            cart: []
          }),
          methods: {
            add(id){
              this.cart.push({... this.inventory[id], qty: 1  })
            }
          }
}
</script>

<style>
</style>