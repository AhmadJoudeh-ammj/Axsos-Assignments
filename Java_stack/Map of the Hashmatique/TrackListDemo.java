import java.util.HashMap;
import java.util.Map;

public class TrackListDemo {
    public static void main(String[] args) {
        // Create a HashMap to store track titles and lyrics
        HashMap<String, String> trackList = new HashMap<>();

        // Add at least 4 songs with their lyrics
        trackList.put("Starlight", "Hold you in my arms, I just wanted to hold...");
        trackList.put("Hysteria", "It's bugging me, grating me, and twisting me around...");
        trackList.put("Plug In Baby", "I've exposed your lies, baby...");
        trackList.put("Time Is Running Out", "I think I'm drowning, asphyxiated...");

        // Pull out one song by its track title
        String selectedTrack = "Hysteria";
        String selectedLyrics = trackList.get(selectedTrack);
        System.out.println("Selected Track - " + selectedTrack + ": " + selectedLyrics);
        System.out.println();

        // Print all tracks with their lyrics
        System.out.println("All Tracks and Lyrics:");
        for (Map.Entry<String, String> entry : trackList.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}