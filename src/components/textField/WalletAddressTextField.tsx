import { TextField, Box } from "@mui/material";
import HeadlineTypography from "../typography/HeadlineTypography";
import { FormValues } from "../../pages/NftPage";
import { useController, UseControllerProps } from "react-hook-form";

const WalletAddressTextField = (props: UseControllerProps<FormValues>) => {
  const { field } = useController(props);
  return (
    <>
      <HeadlineTypography message="Input Wallet Address" />
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField
          type="text"
          minRows={100}
          id="outlined-basic"
          label="Wallet Address"
          placeholder="Input Wallet Address"
          variant="outlined"
          size="small"
          error={false}
          {...field}
          style={{ width: 480 }}
        />
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField
          type="text"
          minRows={100}
          id="outlined-basic"
          label="royalty"
          placeholder="1, 2, 3,,,"
          variant="outlined"
          size="small"
          error={false}
          {...field}
        />
      </Box>
    </>
  );
};

export default WalletAddressTextField;
