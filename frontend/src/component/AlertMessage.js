import { Alert } from "@mui/material"

const AlertMessage = ({ handleClose, severity, message }) => {
  return (
    <Alert
      sx={{ marginBottom: "15px" }}
      variant='standard'
      onClose={handleClose}
      severity={severity}>
      {message}
    </Alert>
  )
}

export default AlertMessage
