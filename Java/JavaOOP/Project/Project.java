public class Project{
    private String name;
    private String description;
    private double initialCost;

    public String elevatorPitch() {
        return this.name + " (" + this.initialCost + ")" + " : " + this.description;
    }
    public Project() {
        this("Unnamed Project","No Description Given",0.00);
    }
    public Project(String name) {
        this.name = name;
        this.description = "No Description Given";
        this.initialCost = 0.00;
    }
    public Project(String name, String description) {
        this.name = name;
        this.description = description;
        this.initialCost = 0.00;
    }
    public Project(String name, String description, double cost) {
        this.name = name;
        this.description = description;
        this.initialCost = cost;
    }

    public String getName(){
        return name;
    }
    public String getDescription(){
        return description;
    }
    public double getCost(){
        return initialCost;
    }

    public void setName(String name){
        this.name = name;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setCost(double cost) {
        this.initialCost = cost;
    }

}