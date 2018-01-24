
watchcrypto = async () => {

	  let bitsocket = await new WebSocket("wss://api.bitfinex.com/ws/2");
	  let cexsocket = await new WebSocket("wss://ws.cex.io/ws/");
	  sendbitrequest = () =>{
	  	
	  	let msg = {
	  		event: 'subscribe', 
		    channel: 'ticker', 
		    symbol: 'tBTCUSD' 
	  	};

	  	//make sure the connection is open to avaoid errors
	  	bitsocket.onopen =(event) =>{
	  		bitsocket.send(JSON.stringify(msg));

	  	}

	  	//check the message returned
	  	bitsocket.onmessage = (event) =>{
	  		// console.log()
	  		data = JSON.parse(event.data)	
	  		if (data){ 		
	  			let bitlast = data[1][6];

	  			if (bitlast){
	  			document.getElementById("bitfinex").textContent = bitlast;

	  		} 	
	  		} 
	  		// console.log(bitlast)

	  			
	  		
	  	}

	  };


	  sendbitrequest();


	  //make cex request
	  sendcexrequest = () =>{
	  	
	  	let msg = {
	  		"e": "subscribe",
    		"rooms": ["tickers"]  
	  	};

	  	//make sure the connection is open to avaoid errors
	  	cexsocket.onopen =(event) =>{
	  		cexsocket.send(JSON.stringify(msg));

	  	}

	  	//check the message returned
	  	cexsocket.onmessage = (event) =>{
	  		// console.log()
	  		data = JSON.parse(event.data)	  		
	  		let cexlast = data
	  		console.log(data)

	  		if (cexlast){
	  			document.getElementById("bitfinex").textContent = bitlast;

	  		} 		
	  		
	  	}

	  };

	  sendcexrequest()








	}

	watchcrypto();