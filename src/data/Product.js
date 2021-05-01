// Define class Product
class Product {
  constructor (id, title, description, price, category, tags, material, shipping, collection, sizes, status) {
    this.id = id
    this.title = title
    this.description = description
    this.price = price
    this.category = category
    this.tags = tags
    this.material = material
    this.shipping = shipping
    this.collection = collection
    this.sizes = sizes
    this.status = status
  }
}

// Define product id
const id = '#4657'

// Export a new Product instance
export default new Product(
  id, // id
  'Super manteau pour supporter le froid des Hauts-de-France', // title
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam eveniet nulla repudiandae aperiam explicabo animi exercitationem necessitatibus quisquam.', // description
  499.00, // price
  'Regular fit', // category
  ['Fashion victim', 'Classe', 'Business'], // tags
  '100% Coton', // material
  'Livraison gratuite', // shipping
  [{ // collection
    color: 'Dark',
    id: `${id}-1`,
    file: 'img-1.jpg'
  }, {
    color: 'Dark Blue',
    id: `${id}-2`,
    file: 'img-2.jpg'
  },
  {
    color: 'Red',
    id: `${id}-3`,
    file: 'img-3.jpg'
  },
  {
    color: 'Brown',
    id: `${id}-4`,
    file: 'img-4.jpg'
  }
  ],
  ['S', 'M', 'L', 'XL', 'XXL'], // size
  'En stock' // status
)
