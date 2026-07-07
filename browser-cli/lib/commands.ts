import {Command} from '../app/api/types'

export const commandRegistry: Record<string, Command>={
	
	'echo':{
		name:'echo',
		execute: (args)=> {return args.join(' ');}
	},

	//'clear':{
	//	name:'clear',
	//	execute:(args)=>{
	//		return args
	//	}
	//}
}
