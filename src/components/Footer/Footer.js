import { Button, Grid,  InputAdornment,  TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import { useState } from "react";

const Footer = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  return (
    <div style={{margin:'10px 0'}}>
      <Grid width="50%">
      <TextField
        id="search"
        type="search"
        label="search for new order"
        value={searchTerm}
        onChange={handleChange}
        size="small"
        sx={{ margin:'0 20px'}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddIcon />
            </InputAdornment>
          ),
        }}
      />
        <ListIcon sx={{ marginBottom: "-7px", marginRight: "30px" }} />
        <Button
          sx={{ border: "none", fontWeight: "bold" }}
          color="success"
          variant="outlined"
          startIcon={<AddIcon />}
        >
          ADD DX (1)
        </Button>
      </Grid>
      <Grid width="50%"></Grid>
    </div>
  );
};
export default Footer;
