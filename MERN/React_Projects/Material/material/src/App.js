import './App.css';
import { 
  Paper,
  Card, 
  CardContent, 
  Button,
  FormControl,
  InputLabel,
  OutlinedInput 
} from '@material-ui/core';
const styles = {
  paper: {
      width: "20rem", padding: "1rem"
  },
  input: {
      marginBottom: "1rem"
  },
  button: {
      width: "100%"
  }
}

function App() {
  return (
    <div className="App">
      <Paper elevation={10}>
        <p>Paper text here</p>
      </Paper>
      <Card>
        <CardContent>
            <h1>This is content within my card</h1>
        </CardContent>
      </Card>
      <Button>Button</Button>
      <Paper elevation={3} style={styles.paper}>
            <h2>Login Form</h2>
            <form>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>E-mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Paper>
    </div>
  );
}

export default App;
