import express from 'express';
import axios from 'axios'
var ccxt = require ('ccxt')


const router = express.Router();

/* GET index page. */
router.get('/login', async (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/market', async (req, res, next) => {


	let bitfinex  = new ccxt.bitfinex ({ verbose: true })
	let huobi = new ccxt.huobi()
	const data1 = await axios.get('https://www.bitstamp.net/api/v2/ticker/btcusd/')
	const bitStamp = data1.data		


	let bitfinexData=(bitfinex.id,  await bitfinex.fetchTicker ('BTC/USD')).info

	res.render('market', {
		title: 'CRYPTOBASE',
		bitStamp,
		bitfinexData	
		
		
	});


});





export default router;



