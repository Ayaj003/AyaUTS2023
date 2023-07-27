
function LogCustomerInfo(customer) {
    try {
      const customerAsObj = JSON.parse(customer);// turn the passed string into Object
      for (const prop in customerAsObj) {
        console.log(`${prop}: ${customerAsObj [prop]}`);// print each prop in the customerAsObj object
      }
    } catch (error) {
      console.log('Error:' + error.message);// handling errors
    }
  }  

function printAge() {
    try{
    const ZeadAge = 36;
	alert("Zead Age is : " + ZeadAge);
    }
    catch{
        console.log('Error:' + error.message)// handling errors
    }
}


const customer1 = '{"custCode":"333","custName":"Aya Jabi","custAge":20,"custPhone":"0598744563","custMobile":"0598745612","custAddress":"Tunis street","custEmail":"aya.ja@outlook.com","fax":"01234556"}';
LogCustomerInfo(customer1);

printAge();