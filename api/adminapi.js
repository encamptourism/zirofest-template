import axios from "axios";

let token ="";
let head = {};
if (typeof window !== 'undefined') {
  token =   localStorage.getItem('user');
}
token?head={
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'crossdomain': true,
            'authorization':"Bearer " + token,
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
}:head={
            'Content-Type': 'application/json',
            'crossdomain': true,
            'accept': 'application/json',
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
}

export default axios.create({
	baseURL:"https://backend.encampadventures.com/api/v1",
  headers:head 
      
})

