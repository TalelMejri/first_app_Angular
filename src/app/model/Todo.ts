export class Todo{
  title:string;
  description:string;
  duedate:Date;
  constructor(){
    this.title="";
    this.description="";
    this.duedate=new Date();
  }
}
