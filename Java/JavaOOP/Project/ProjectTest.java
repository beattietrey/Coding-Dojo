public class ProjectTest{
    public static void main(String[] args) {
        Project p1 = new Project();
        Project p2 = new Project("Project 2");
        Project p3 = new Project("Project 3","This one has a description");
        Project p4 = new Project("Project 4","Best project", 100.00);

        System.out.println(p1.getName());
        System.out.println(p2.getName());
        System.out.println(p3.getName());
        System.out.println(p4.getName());
        
        System.out.println(p1.getDescription());
        System.out.println(p2.getDescription());
        System.out.println(p3.getDescription());
        System.out.println(p4.getDescription());
        
        p1.setName("Project 1");
        p2.setDescription("First changed");
        System.out.println(p1.getName());
        System.out.println(p2.getDescription());
        
        System.out.println(p1.getCost());
        
        p1.setCost(1.99);
        p2.setCost(17.99);
        p3.setCost(49.99);
        
        System.out.println(p1.getCost());
        System.out.println(p2.getCost());
        System.out.println(p3.getCost());
        System.out.println(p4.getCost());
        
        System.out.println(p1.elevatorPitch());

    }
}