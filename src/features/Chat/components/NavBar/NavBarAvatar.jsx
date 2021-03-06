import React, { useState, useContext } from 'react';
import { Box, Avatar, Menu, MenuItem, Divider, Stack } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import img from 'resources/img/avatar-invite.png';
import InviteDialog from '../Dialogs/InviteDialog/InviteDialog';
import { AuthContext } from 'context/AuthProvider';

export default function NavBarAvatar({ setOpenAccountDialog, setOpenLogoutDialog }) {
	const { user } = useContext(AuthContext);
	const [openInviteDialog, setOpenInviteDialog] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box className="navbar__avatar-box">
			<Avatar src={user.photoURL} onClick={handleClick} className="navbar__avatar">
				{user.displayName.charAt(0)}
			</Avatar>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 3,
					sx: {
						width: '218px',
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				className="navbar__avatar__menu"
			>
				<MenuItem className="navbar__avatar__menu__item" onClick={() => setOpenAccountDialog(true)}>
					<PermIdentityIcon fontSize="small" />
					<span>Tài khoản</span>
				</MenuItem>
				<MenuItem className="navbar__avatar__menu__item">
					<SettingsOutlinedIcon fontSize="small" />
					<span>Cài đặt</span>
				</MenuItem>
				<Divider variant="middle" className="navbar__avatar__menu__divider" />
				<MenuItem className="navbar__avatar__menu__item" onClick={() => setOpenLogoutDialog(true)}>
					<span style={{ color: '#db342e', marginLeft: '24px' }}>Đăng xuất</span>
				</MenuItem>
				<Divider variant="middle" className="navbar__avatar__menu__divider" />
				<MenuItem className="navbar__avatar__menu__item">
					<span style={{ marginLeft: '24px' }}>Zola PC</span>
				</MenuItem>
				<Stack
					direction="row"
					className="navbar__avatar__menu__invite"
					onClick={() => setOpenInviteDialog(true)}
				>
					<span>Mời đồng nghiệp sử dụng Zola PC</span>
					<img src={img} alt="menu" className="navbar__avatar__menu__img"></img>
				</Stack>
			</Menu>
			<InviteDialog open={openInviteDialog} setOpen={setOpenInviteDialog} />
		</Box>
	);
}
