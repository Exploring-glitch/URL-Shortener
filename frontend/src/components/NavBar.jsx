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
        <nav className="bg-[#1E1E1E] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-[#E0E0E0] text-lg sm:text-2xl font-semibold"> URL <span className="text-[#2979FF]">Shortener</span></h1>

            <div className='flex gap-3'>
                <div className="flex items-center">
                    {isAuthenticated ? (
                        <button onClick={onLogout} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium transition-colors duration-200" >Logout</button>
                    ) : (
                        <Link to="/auth" className="bg-[#2979FF] hover:bg-[#1E63E6] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium transition-colors duration-200">Sign In</Link>)
                    }
                </div>
            </div>
        </nav>
    )
}


