// MUI
import { Breakpoint, Typography, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";

interface DefaultDialogProps {
  maxWidth?: Breakpoint;
  children: React.ReactNode;
  open: boolean;
  title: string;
  fullscreen?: boolean;
  handleOnClose: () => void;
}
export default function DefaultDialog({
  maxWidth,
  children,
  open,
  title,
  fullscreen,
  handleOnClose,
}: DefaultDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      maxWidth={maxWidth ?? "sm"}
      fullWidth
      fullScreen={fullscreen !== undefined ? fullscreen : isMobile}
      sx={{
        backgroundColor: `${theme.palette.custom.secondaryBackground}99`,
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            borderRadius: isMobile ? 0 : theme.shape.borderRadius,
          },
        },
      }}
    >
      <DialogTitle>
        <Typography
          variant={"body1"}
          fontSize={"1.25rem"}
          color={"custom.primaryText"}
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
