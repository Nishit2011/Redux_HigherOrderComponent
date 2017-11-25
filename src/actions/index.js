import {CHANGE_AUTH} from './types';


export  function authenticate(isLoggedIn){
	console.log('nishit')
	return {
		type:CHANGE_AUTH,
		payload:isLoggedIn
	};
}