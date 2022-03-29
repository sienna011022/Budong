const InvoiceGenerator = require('./PDFKit')

const obj = require('../../public/js/home/product_register')


//받아오기
console.log(obj.name);


const invoiceData = {
    addresses: {
        shipping: {
            name: obj.name,
            address: '2400 Fulton Street',
            city: 'San Francisco',
            state: 'CA',

            country: 'US',
            postalCode: 94118
        },
        billing: {
            name: obj.name,
            address: '2400 Fulton Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
            postalCode: 94118
        }
    },
    memo: 'As discussed',
    items: [{
        Code: 12341,
        ription: 'Laptop Computer',
        tity: 2,
        e: 3000,
        nt: 6000
    }, {
        Code: 12342,
        ription: 'Printer',
        tity: 1,
        e: 2000,
        nt: 2000

    }],
    subtotal: 8000,
    paid: 0,
    invoiceNumber: 1234,
    dueDate: 'Feburary 02, 2021'
}

const ig = new InvoiceGenerator(invoiceData)
ig.generate()