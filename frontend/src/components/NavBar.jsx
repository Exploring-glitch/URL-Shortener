import { Link, useNavigate } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout_User } from '../api/userApi';
import { logout } from '../store/slice/authSlice';


export const NavBar = () => {
    const { isAuthenticated } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const onLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (!confirmLogout) return;

        try {
            const data = await logout_User()
            console.log(data.message);

            dispatch(logout());
            navigate({ to: "/" });
        }
        catch (e) {
            console.log(e.message);
        }
    }

    return (
        <nav className="bg-[#0A0A0A] border-b border-[#262626] px-4 sm:px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-[#FAFAFA] text-base sm:text-lg font-medium tracking-tight">URL Shortener</h1>

            <div className='flex gap-3'>
                <div className="flex items-center">
                    {isAuthenticated ? (
                        <button onClick={onLogout} className="border border-[#404040] text-[#FAFAFA] hover:bg-[#1A1A1A] px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium transition-colors duration-200" >Logout</button>
                    ) : (
                        <Link to="/auth" className="bg-[#FAFAFA] hover:bg-[#D4D4D4] text-[#0A0A0A] px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm font-medium transition-colors duration-200">Sign In</Link>)
                    }
                </div>
            </div>
        </nav>
    )
}


