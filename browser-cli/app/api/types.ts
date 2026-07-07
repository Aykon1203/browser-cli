type Command = {
	name: string;
	desc:string;
	execute:(args:string[])=>string;
}

type HistoryItem = {
	id:number;
	text:string;
	type:'input'|'output';
}
