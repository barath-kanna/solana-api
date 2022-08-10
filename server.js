const app = require("./src/app");
const logger = require("./src/helper/logger")
const port = process.env.PORT || 5000;

const server = app.listen(port, function () {
  logger.info("Connected At " + port);
  // console.log()
  newdata()
});

server.timeout = 30000;

async function newdata(){
  const web3 = require("@solana/web3.js");

  // let connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
  // console.log("con", web3.clusterApiUrl('devnet'))
  // var url_dev = web3.clusterApiUrl('devnet')
  // var url_dev = "https://api.devnet.solana.com"
  var url_dev = "http://localhost:8899/"
  // var url_dev = "http://65.2.129.37:8899/"
  let connection = new web3.Connection(url_dev, 'confirmed');

  // let slot = await connection.getSlot();
  // let leader = await connection.getSlotLeader();
  // console.log("latest block: ", slot);
  // console.log("latest leader: ", leader);
  // var slot_old = slot;
  // 93186439

  // let blockTime = await connection.getBlockTime(slot);
  // console.log(blockTime);

  // slot = 60497920;
  // var slot_new = slot_old;
  // var diffe = slot_new - slot;
  let i = 0;
  let block = await connection.getBlock(143348484);
  while (block.transactions[i] != undefined)
   {
  console.log("block", block.transactions[i]);
  i++;
  }
}
  // var count = 0;
  // while(block){
  //   try{
  //     block = await connection.getBlock(block.parentSlot);
  //     console.log("block", block.parentSlot);
  //   }  
  //   catch(err){
  //     console.log("Reached first block");
  //     break;
  //   }
  //   // count += 1;
  // }
  // function set_date(){
  //   console.log("done");
  // }
  // console.log("First block: ", block);
  // var js_on = JSON.stringify(block)
  // console.log("First block: ", );
  // var fs = require('fs');
  // fs.writeFile('myjsonfile.json', js_on, 'utf8', set_date);
  // // console.log("Total blocks to download since beginning: ", diffe);
  // console.log("End of script");
