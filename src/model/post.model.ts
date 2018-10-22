export class PostModel {

    image: string;
    text: string;
    datePost: Date;

    constructor(image: string, text: string, datePost: Date) {
        this.image = image,
        this.text = text,
        this.datePost = datePost;
    }
}