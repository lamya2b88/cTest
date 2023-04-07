import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={0.5}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Main />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
