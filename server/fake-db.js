const Product = require('./model/product')

class FakeDb{
  constructor(){
    this.products = [
      {
        name:'Phone XL',
        price: 799,
        description:'~~~~~~',
        hedding1:'AAA',
        hedding2:'',
        hedding3:'',
        coverimage:'./assets/img/phone-cover.jpg',
        heddingtext1:'AAA',
        heddingtext2:'AAA',
        heddingtext3:'AAA'
      },
      {
        name:'Phone mini',
        price: 699,
        description:'~~~~~~',
        hedding1:'',
        hedding2:'',
        hedding3:'',
        coverimage:'./assets/img/phone-cover.jpg',
        heddingtext1:'AAA',
        heddingtext2:'AAA',
        heddingtext3:'AAA'
      },
      {
        name:'Phone Standard',
        price: 299,
        description:'~~~~~~',
        hedding1:'',
        hedding2:'',
        hedding3:'',
        heddingtext1:'AAA',
        heddingtext2:'AAA',
        heddingtext3:'AAA'
      },
      {
        name:'Phone spcial',
        price: 1299,
        description:'~~~~~~',
        hedding1:'',
        hedding2:'',
        hedding3:'',
        heddingtext1:'AAA',
        heddingtext2:'AAA',
        heddingtext3:'AAA'
      }
    ]
  }

  async initDB(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

  pushProductsToDb(){
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb(){
    this.pushProductsToDb()
  }
}

module.exports = FakeDb