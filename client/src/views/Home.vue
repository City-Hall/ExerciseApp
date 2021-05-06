<template>
<!DOCTYPE html>
<html>
<body>

<h1>The datalist element</h1>

<form action="/action_page.php" method="get">
  <label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser">
  <datalist id="browsers">
    <div class="media" v-for="(x, i) in inventory" :key= i>
                          <option :value ="x.name"></option>
                      </div>
  </datalist>
  <input type="submit">
</form>

<p><strong>Note:</strong> The datalist tag is not supported in Safari 12.0 (or earlier).</p>

</body>
</html>

</template>

<script>
export default {
          data: () => ({
            inventory: [
                { name: 'Dumbbell', price: 3.99, pic: 'https://images-na.ssl-images-amazon.com/images/I/71Z1Ozj%2BM0L._AC_SL1500_.jpg'},
                { name: 'Exercise Mat', price: 10.00, pic: 'https://cdn.shopify.com/s/files/1/1734/8163/products/MAT-B_SPRI-Exercise-Mat-Blue_C.jpg?v=1574193714' },
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
