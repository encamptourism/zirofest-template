import axios from "axios";

let head={
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'crossdomain': true,
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
}

export default axios.create({
	baseURL:"https://backend.encampadventures.com/api/v1",
  headers:head 
      
})

