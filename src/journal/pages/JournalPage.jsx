import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import JournalLayout from '../layout/JournalLayout';
import NothingSelectedView from '../views/NothingSelectedView';

const JournalPage = () => {
	return (
		<JournalLayout>
			{/* <Typography>
				Et dolor irure minim fugiat minim aute est esse dolor voluptate. Velit
				labore culpa elit dolore incididunt commodo dolore eu laborum enim in.
				Ut nisi culpa enim velit sunt laborum anim incididunt dolore. Enim
				officia qui voluptate nostrud eiusmod laboris. Pariatur laboris cillum
				nisi excepteur enim cillum proident tempor dolor fugiat. Dolore
				exercitation ullamco labore cillum cupidatat quis ad.
			</Typography> */}

			<NothingSelectedView />

			{/* <NoteView /> */}

			<IconButton
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};

export default JournalPage;
