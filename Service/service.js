app.service('productService',function(){


			var Samsung ={
				name: 'aster note-8',
				modelNo: '10001',
				color: 'white',
				ram : '4GB',
				storage: '16GB',
				price: '20000k'
			}
			var Sony ={
				name: 'Vivo',
				modelNo: '102561',
				color: 'red',
				ram : '4GB',
				storage: '500GB',
				price: '40000k'
			}
			var Nokia ={
				name: 'nano',
				modelNo: '1XBRE56',
				color: 'orange',
				ram : '4GB',
				storage: '16GB',
				price: '16000'
			}
			var  Lg={
				name: 'Pike',
				modelNo: '1GTSR1',
				color: 'blue',
				ram : '8GB',
				storage: '32GB',
				price: '18000'
			}
			var  Apple={
				name: 'IPhone7',
				modelNo: '100034GTSR1',
				color: 'white',
				ram : '8GB',
				storage: '32GB',
				price: '50000'
			}
			var productInfo=[Samsung, Sony,Nokia,Lg,Apple]
		this.productDetails= function(){
				return productInfo;
		}
	
})