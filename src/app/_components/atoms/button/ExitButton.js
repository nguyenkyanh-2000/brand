import React from "react";
import IconButton from "../_atoms/button/IconButton";
import { ExitIcon } from "../../../../public/icons";

const ExitButton = ({ onClick }) => (
  <IconButton width={24} height={24} Icon={ExitIcon} onClick={onClick} />
);

export default ExitButton;
