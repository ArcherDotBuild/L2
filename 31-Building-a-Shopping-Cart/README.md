## 31-Building-a-Shopping-Cart

**folder 01**

## 1. 01 Exploring Image Upload

## 2. 02 Fixing the HandleErrors Middleware

## 3. 03 Edit Form Template

## 4. 04 Deleting Products

## 5. 05 Starting with Seed Data

## 6. 06 User-Facing Products

## 7. 07 Products Index

## 8. 08 Merging More Styling

## 9. 12 Shopping Cart Boilerplate

## 10. 13 Submission Options

Option 1

```javascript
<footer class='card-footer'>
  //
  <form action='/cart/products/${product.id}' method='POST'>
    <button class='button has-icon is-inverted'>
      <i class='fa fa-shopping-cart'></i> Add to cart
    </button>
  </form>
</footer>
```

Option 2

```javascript
<footer class='card-footer'>
  <form action='/cart/products' method='POST'>
    <input hidden value='${product.id}' name='productId' />
    <button class='button has-icon is-inverted'>
      <i class='fa fa-shopping-cart'></i> Add to cart
    </button>
  </form>
</footer>
```

## 11. 14 Creating a Cart, One Way or Another

## 12. 15 Adding Items to a Cart

## 13. 16 Displaying Cart Items

## 14. 17 Rendering the List

## 15. 18 Totaling Cart Items

## 16. 19 Removing Cart Items

## 17. 20 Redirect on Remove