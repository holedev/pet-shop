const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    products: [

    ],
    render: function() {
        const htmls = this.products.map(function(product, index){
            return ``
        })
        const x = htmls.toString()
        console.log(x)
    },
    handleEvent: function() {

    },
    start: function () {
        this.render()
        this.handleEvent()
    }
}

app.start()