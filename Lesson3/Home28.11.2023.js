
//  // let users1 = [
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     []
// // ]
// // for (let i = 0; i <users1.length; i++) {
// //     document.write('<div><br>users info-!</div');
// //
// // }
// // // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // let users2 = [
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     [],
// //     []
// // ]
// // for (let i = 0; i <users2.length; i++) {
// //     document.write('<div><br>Database$</div></div');
// // }
// // //     let indices = [];
// // // let array = [users2];
// // // let element = 'vasya';
// // // let idx = array.indexOf(element);
// // // while (idx != -1) {
// // //   indices.push(idx);
// // //   idx = array.indexOf(element, idx + 1);
// // // }
// // //     console.log(indices);
// // // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// //     let users3 = [
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         [],
// //         []
// //
// //     ]
// //     for (let i = 0; i <users3.length; i++) {
// //         document.write('<h1><br>List of company employees;</h1></div');
// //     }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// //var indices = [];
// // var array = ["a", "b", "a", "c", "a", "d"];
// // var element = "a";
// // var idx = array.indexOf(element);
// // while (idx != -1) {
// //   indices.push(idx);
// //   idx = array.indexOf(element, idx + 1);
// // }
// // - Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
// //
// //     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// //
// // ШАБЛОН:
// //     <ul>
// //         <li>ITEM OF ARRAY</li>
// //         <!--
// //             і тд інші об'єкти масиву
//
//
// //
// // замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// //
// // -----------------------------------------------
// //
// //     Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// //
// // let products = [
// //     {
// //         title: 'milk',
// //         price: 22,
// //         // image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// //     },
// //     {
// //         title: 'juice',
// //         price: 27,
// //         // image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// //     },
// //     {
// //         title: 'tomato',
// //         price: 47,
// //         // image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// //     },
// //     {
// //         title: 'tea',
// //         price: 15,
// //         // image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// //     },
// // ];
// //
// //     for (let i = 0; 1 < products.length; i++) {
// //         const product= products[i];
// //         document.write('<div><h1>${product.title} - ${product.price} UAH</h1></div>')
//
//     }
// //
// // ШАБЛОН
// // <div class="product-card">
// //     <h3 class="product-title">TITLE. Price - PRICE</h3>
// // <img src="IMAGE" alt="" class="product-image">
// // </div>
// // Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
// //
// //
// //
// // --------------------
// //     є масив
// // let users = [
// //     {name: 'vasya', age: 31, status: false},
// //     {name: 'petya', age: 30, status: true},
// //     {name: 'kolya', age: 29, status: true},
// //     {name: 'olya', age: 28, status: false},
// //     {name: 'max', age: 30, status: true},
// //     {name: 'anya', age: 31, status: false},
// //     {name: 'oleg', age: 28, status: false},
// //     {name: 'andrey', age: 29, status: true},
// //     {name: 'masha', age: 30, status: true},
// //     {name: 'olya', age: 31, status: false},
// //     {name: 'max', age: 31, status: true}
// // ];
// // for (let i = 0;i<users.length; i++){
// //     // console.log('test');
// //     console.log(users[i]);
// // }
// // за допомоги циклу вивести:
// //     - користувачів зі статусом true
// // - користувачів зі статусом false
// // - користувачів які старші за 30 років