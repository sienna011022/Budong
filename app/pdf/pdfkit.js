const PDFGenerator = require('pdfkit')
const fs = require('fs')

class InvoiceGenerator {


    constructor(invoice) {
        this.invoice = invoice
    }

    generateHeaders(doc) {
        const billingAddress = this.invoice.addresses.billing

        doc
            .image('./logo.jpg', 0, 0, { width: 250 })
            .fillColor('#000')
            .fontSize(20)
            .text('INVOICE', 275, 50, { align: 'right' })
            .fontSize(10)
            .text(`Invoice Number: ${this.invoice.invoiceNumber}`, { align: 'right' })
            .text(`Due: ${this.invoice.dueDate}`, { align: 'right' })
            .text(`Balance Due: $${this.invoice.subtotal - this.invoice.paid}`, { align: 'right' })
            .moveDown()
            .text(`Billing Address:\n ${billingAddress.name}\n${billingAddress.address}\n${billingAddress.city}\n${billingAddress.state},${billingAddress.country}, ${billingAddress.postalCode}`, { align: 'right' })

        const beginningOfPage = 50
        const endOfPage = 550

        doc.moveTo(beginningOfPage, 200)
            .lineTo(endOfPage, 200)
            .stroke()

        doc.text(`Memo: ${this.invoice.memo || 'N/A'}`, 50, 210)

        doc.moveTo(beginningOfPage, 250)
            .lineTo(endOfPage, 250)
            .stroke()

    }

    generateTable(doc) {
        const tableTop = 270
        const itemCodeX = 50
        const descriptionX = 100
        const quantityX = 250
        const priceX = 300
        const amountX = 350

        doc
            .fontSize(10)
            .text('Item Code', itemCodeX, tableTop, { bold: true })
            .text('Description', descriptionX, tableTop)
            .text('Quantity', quantityX, tableTop)
            .text('Price', priceX, tableTop)
            .text('Amount', amountX, tableTop)

        const items = this.invoice.items
        let i = 0


        for (i = 0; i < items.length; i++) {
            const item = items[i]
            const y = tableTop + 25 + (i * 25)

            doc
                .fontSize(10)
                .text(item.itemCode, itemCodeX, y)
                .text(item.description, descriptionX, y)
                .text(item.quantity, quantityX, y)
                .text(`$ ${item.price}`, priceX, y)
                .text(`$ ${item.amount}`, amountX, y)
        }
    }

    generateFooter(doc) {
        doc
            .fontSize(10)
            .text(`Payment due upon receipt. `, 50, 700, {
                align: 'center'
            })
    }

    generate() {
        let theOutput = new PDFGenerator

        console.log(this.invoice)

        const fileName = `Invoice ${this.invoice.invoiceNumber}.pdf`

        // pipe to a writable stream which would save the result into the same directory
        theOutput.pipe(fs.createWriteStream(fileName))

        this.generateHeaders(theOutput)

        theOutput.moveDown()

        this.generateTable(theOutput)

        this.generateFooter(theOutput)


        // write out file
        theOutput.end()

    }
}

module.exports = InvoiceGenerator

/*
// 모듈로드

const pdfDocument = require('PDFKit');
const fs = require("fs");


// 도큐먼트 생성

let doc = new pdfDocument();


// 출력파일 지정

doc.pipe(fs.createWriteStream("output_test.pdf"));



// 폰트지정 - 나눔고딕 사용(한글폰트를 사용해야 한다.)

doc.font("C:/Windows/Fonts/210 GGothyangki R.ttf");



// 문자표시 

doc.fontSize(30).text("계약서 예시", 90, 100);
doc.fontSize(20).text("S-CRYPTO", 100, 180);


// 페이지 추가

doc.addPage();


// 문자표시

doc.fontSize(50).text("2022.03.04 오후 4:45", 100, 100);


// 종료

doc.end();
*/