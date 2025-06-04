

public abstract class Art {
    private final String title;
    private final String description;
    private final String author;

    public Art(String title, String description, String author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getAuthor() {
        return author;
    }

    public abstract void ViewArt();
    
}