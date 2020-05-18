export class Submission{
    public name: string;
    public content: string;
    public date: Date;
    public approval: boolean;

    constructor(name: string, content: string, date: Date, approval?: boolean){
        this.name = name;
        this.content = content;
        this.date = date;
        this.approval=false;
        if(approval){
            this.approval=approval;
        }
    }
}