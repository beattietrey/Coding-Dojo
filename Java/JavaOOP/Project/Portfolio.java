import java.util.ArrayList;

public class Portfolio {
    private ArrayList<Project> projects = new ArrayList<Project>();
    
    public Portfolio(Project name) {
        projects.add(name);
    }
    
    public void addProject(Project name) {
        projects.add(name);
    }

    public ArrayList<Project> getProjects() {
        for(int i = 0; i < projects.size(); i++) {
            System.out.println(projects.get(i).getName());
        }
        return projects;
    }

    public double getPortfolioCost() {
        double sum = 0;
        for(int i = 0; i < projects.size(); i++) {
            sum+=projects.get(i).getCost();
        }
        return sum;
    }

    public void showPortfolio() {
        for(int i = 0; i < projects.size(); i++) {
            System.out.println(projects.get(i).getDescription());
        }
        System.out.println(this.getPortfolioCost());
    }
}
