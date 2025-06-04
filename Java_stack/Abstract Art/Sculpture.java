public class Sculpture extends Art {
    private final String material;

    public Sculpture(String title, String description, String author, String material) {
        super(title, description, author);
        this.material = material;
    }

    public String getMaterial() {
        return material;
    }

    @Override
    public void ViewArt() {
        // Display the sculpture details
        System.out.println("Viewing sculpture: " + getTitle() + " by " + getAuthor());
        System.out.println("Description: " + getDescription());
        System.out.println("Material: " + material);
    }

    @Override
    public String toString() {
        return "Sculpture{" +
                "title='" + getTitle() + '\'' +
                ", description='" + getDescription() + '\'' +
                ", author='" + getAuthor() + '\'' +
                ", material='" + material + '\'' +
                '}';
    }
}
