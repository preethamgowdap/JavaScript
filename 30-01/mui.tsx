//implementing textfield, radiobutton and checkbox from mui

import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";

type Gender = "male" | "female" | "other";

export default function SimpleMuiForm() {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [accepted, setAccepted] = useState<boolean>(false);
  
  return (
    <Box
     component="form"
      sx={{ maxWidth: 450, mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
         }}
       noValidate
      autoComplete="off"
    >
      {/* Name */}
      <TextField label="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />

      {/* Gender */}
      <FormControl>
        <FormLabel id="gender-label">Gender</FormLabel>
        <RadioGroup name="Gender " value={gender} onChange={(e) => setGender(e.target.value as string)} >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      {/* Single Checkbox */}
      <FormControlLabel
        control={ <Checkbox checked={accepted} onChange={(e) => setAccepted(e.target.checked)}/> }label="Required" />
    </Box>
  );
}
