import { Current_User } from "../api/userApi";
import { login } from "../store/slice/authSlice";
import { redirect } from "@tanstack/react-router";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;

        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: Current_User,
        });
        if (!user) return false;

        store.dispatch(login(user));

        const { isAuthenticated } = store.getState().auth;
        if (!isAuthenticated) {
            return false;
        } else {
            return true;
        }
    }
    catch (error) {
        console.log(error)
        return redirect({ to: "/auth" })
    }
}