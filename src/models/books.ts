export class Book {
    public title: string = '';
    public author: string = '';
    public date: string = '';
    public img: string = '';
    public price: string = ((Math.random()*99)+1).toString();

    constructor(title?: string, author?: string, date?: string, img?: string, price?: string ){
        if(title){
            this.title = title;
        }
        if(author){
            this.author = author;
        }
        if(date){
            this.date = date;
        }
        if(img){
            this.img = img;
        }
        if(price){
            this.price = price;
        }
    }
}
