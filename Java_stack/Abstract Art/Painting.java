public class Painting extends Art {

    private final String paintType;

    public Painting(String title, String description, String author, String paintType) {
        super(title, description, author);
        this.paintType = paintType;
    }

    public String getPaintType(String Oil , String Watercolor , String Acrylic) {
        return paintType;
    }

    @Override
    public void ViewArt() {
        System.out.println("Viewing painting: " + getTitle() + " by " + getAuthor());
        System.out.println("Description: " + getDescription());
        System.out.println("Paint Type: " + paintType);
    }

    @Override
    public String toString() {
        return "Painting{" +
                "title='" + getTitle() + '\'' +
                ", description='" + getDescription() + '\'' +
                ", author='" + getAuthor() + '\'' +
                ", paintType='" + paintType + '\'' +
                '}';
    }
}
