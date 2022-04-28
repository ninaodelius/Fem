import React, { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import * as Icons from '@mui/icons-material'


const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);
    Icons[visible ? <VisibilityIcon/> : <VisibilityOffIcon/>]
    const Icon = (
        <Icons onClick={() => setVisibility(visibility => !visibility)} />
    )

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
};
export default usePasswordToggle;