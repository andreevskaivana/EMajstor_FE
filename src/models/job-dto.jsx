export class JobDTO {
    constructor(title, description, price, jobProviderId, categoryId) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.jobProviderId = jobProviderId;
        this.categoryId = Number(categoryId); // Ensure categoryId is always a number
    }
}
