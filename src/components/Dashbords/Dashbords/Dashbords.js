import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Dashbords.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import useAuth from "../../hook/useAuth";


const drawerWidth = 240;

const Dashbords = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const{admin,logout}=useAuth()
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	
	const drawer = (
		<div>
		
			<div className="sidebar">
				<div className="sidebarWrapper">
					<div className="sidebarMenu">
						<ul className="sidebarList">
							<Link to="/" className="link">
								<li className="sidebarListItem">
									<HomeIcon color="secondary" />
									Go Home
								</li>
							</Link>
							<Link
								to=""
								className="link"
							>
								<li className="sidebarListItem ">
									<LineStyleIcon className="sidebarIcon" />
									Dashboard
								</li>
							</Link>
							
							{ admin &&   <Box>

									<Link
										to="/dashboard/make-admin/"
										className="link"
									>
										<li className="sidebarListItem">
											<TrendingUpIcon className="sidebarIcon" />
											Make Admin
										</li>
									</Link>
									<Link
										to="/dashboard/allItem"
										className="link"
									>
										<li className="sidebarListItem">
											<TrendingUpIcon className="sidebarIcon" />
											AllItem
										</li>
									</Link>
									
    </Box>}
								
						</ul>
					</div>
				</div>
			</div>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				// justifyContent= 'end'
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<div className="topbar">
						<div className="topbarWrapper">
							<div className="topLeft">
								<span className="logo__des">travel</span>
							</div>
							<div className="topRight">
								<div className="topbarIconContainer">
									<LogoutIcon onClick={logout}/>
								</div>
							</div>
						</div>
					</div>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
			
				<Outlet />
			</Box>
		</Box>
	);
};

export default Dashbords;