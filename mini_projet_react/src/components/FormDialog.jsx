import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  onSubmit,
  value1,
  value2,
  value3,
  onchange1,
  onchange2,
  onchange3,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/**/}

      <button className="btn-dialog" onClick={handleClickOpen}>
        Create Contact{" "}
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmit}>
            <DialogContentText>
              To add new contact , please enter your contact Full name ,email
              and Phone number here.
            </DialogContentText>
            <TextField
              required
              id="filled-required"
              autoFocus
              margin="dense"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
              value={value1}
              onChange={onchange1}
            />
            <TextField
              required
              id="filled-required"
              autoFocus
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={value2}
              onChange={onchange2}
            />
            <TextField
              required
              id="filled-required"
              autoFocus
              margin="dense"
              label="Phone Number"
              type="number"
              fullWidth
              variant="standard"
              value={value3}
              onChange={onchange3}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
