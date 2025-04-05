import { Box, Collapse, List, ListItemButton } from "@mui/material";
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useState } from "react";
import './SideBar.scss'
import { menuList } from "./MenuListItems";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    const { authState } = useContext(AuthContext);
    const [openItems, setOpenItems] = useState<string[]>([]);

    const handleToggle = (itemLabel: string) => {
        setOpenItems(prevState =>
            prevState.includes(itemLabel)
                ? prevState.filter(item => item !== itemLabel)
                : [...prevState, itemLabel]
        );
        let icon = document.querySelector(".ExpandMore");
        if (icon && icon.classList.contains('CloseToggle')) {
            icon.classList.remove("CloseToggle");
            icon.classList.add("OpenToggle");
        } else if (icon && icon.classList.contains('OpenToggle')) {
            icon.classList.remove("OpenToggle");
            icon.classList.add("CloseToggle");
        }
    };

    return (
        <>
            {
                authState.isAuthenticated &&
                <aside className='sidebarCont'>
                    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
                            <List key={1}>
                                {
                                    menuList &&
                                    menuList.map((item, index) => (
                                        item && item.childs.length === 0 ? (
                                            <ListItemButton key={index} onClick={() => { item.link && navigate(item.link) }}>
                                                <div className="sidebarCont-listbtn">
                                                    {item.icon}
                                                    {item.label}
                                                </div>
                                            </ListItemButton>
                                        ) : (
                                            <>
                                                <ListItemButton key={index} onClick={() => handleToggle(item.label)}>
                                                    <div className="sidebarCont-listbtnls">
                                                        <div className="sidebarCont-listbtn">
                                                            {item.icon}
                                                            {item.label}
                                                        </div>
                                                        <ExpandMore
                                                            className={`ExpandMore-{${index}} ${openItems.includes(item.label) ? "OpenToggle" : "CloseToggle"}`}
                                                        />
                                                    </div>
                                                </ListItemButton>
                                                <Collapse in={openItems.includes(item.label)} timeout="auto" unmountOnExit>
                                                    <List key={index} component="div" disablePadding>
                                                        {item.childs.map((child, childIndex) => (
                                                            <ListItemButton
                                                                key={childIndex}
                                                                sx={{ pl: 4 }}
                                                                onClick={() => { child.link && navigate(child.link) }}
                                                            >
                                                                <div className="sidebarCont-listbtn">
                                                                    {child.icon}
                                                                    {child.label}
                                                                </div>
                                                            </ListItemButton>
                                                        ))}
                                                    </List>
                                                </Collapse>
                                            </>
                                        )
                                    ))
                                }
                            </List>
                        </Box>
                    </Box>
                </aside>
            }
        </>
    )
}

export default SideBar;
