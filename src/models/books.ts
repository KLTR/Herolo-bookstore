export class Book {
    public title: string;
    public author: string;
    public date: string;
    public img: string;
    public price: string;
    constructor(title?: string, author?: string, date?: string, img?: string, price?: string ){
        if(title){
            this.title = title;
        }else{
            this.title = ""
        }
        if(author){
            this.author = author;
        }else{
            this.author = ""
        }
        if(date){
            this.date = date;
        }else{
            this.date = ""
        }
        if(img){
            this.img = img;
        }else{
            this.img = ""
        }
        if(price){
            this.price = price;
        }else{
            this.price = ((Math.random()*99)+1).toString();
        }
    }
}