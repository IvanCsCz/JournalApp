import { Box, Toolbar } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const drawerWith = 340;

const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<NavBar drawerWith={drawerWith} />

			<SideBar drawerWith={drawerWith} />

			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />

				{children}
			</Box>
		</Box>
	);
};

export default JournalLayout;
