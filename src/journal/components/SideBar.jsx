import { TurnedInNot } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography
} from '@mui/material';

const SideBar = ({ drawerWith }) => {
	return (
		<Box
			component='nav'
			sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant='permanent'
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith }
				}}
			>
				<Toolbar>
					<Typography variant='h6' noWrap component='div'>
						Ivan Campos
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{['Enero', 'Febrero', 'Marzo'].map((text, index) => (
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText secondary='Lorem duis in officia proident laboris commodo dolor cillum.' />
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

export default SideBar;
