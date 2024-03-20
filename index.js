const message_queue_integrator = require('message-queue-integrator');
const inventory_management_platform = require('inventory-management-platform');
const ganache_cli = require('ganache-cli');
const web3_react = require('web3-react');
const redux = require('redux');
const passport = require('passport');

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((acc, curr) => acc + curr, 0));

// Get the Ethereum network ID
web3.eth.net.getId().then(networkId => {
  console.log('Network ID:', networkId);
}).catch(err => {
  console.error('Error getting network ID:', err);
});

const fs = require('fs').promises;
async function readFileAsync() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFileAsync();